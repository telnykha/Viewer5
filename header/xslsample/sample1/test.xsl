<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Выводим документ в формате html и кодировке windows-1251 -->
  <xsl:output method="html" encoding="utf-8"/>
  <!--
   |   Переменная, которая содержит уникальный
   |   идентификатор выбранного узла дерева
   +-->
  <xsl:param name="current" select="''"/>
  <!-- Определение ключа категории -->
  <xsl:key name="cat" match="category" use="generate-id(.)"/>
  <!-- Находим текущую категорию -->
  <xsl:variable name="category" select="key('cat',$current)"/>
  <!--
   |   Находим надкатегории текущей категории, узлы которых
   |   мы будем раскрывать в дереве
   +-->
  <xsl:variable name="path"
    select="$category/ancestor-or-self::category"/>

  <!-- Шаблон обработки каталога -->
  <xsl:template match="catalog">
    <xsl:apply-templates select="category"/>
  </xsl:template>

	<!-- Шаблон обработки категории -->
  <xsl:template match="category">
    <!-- Параметр, указывающий отступ -->
    <xsl:param name="indent"/>
    <!-- Выводим отступ -->
    <xsl:value-of select="$indent"/>
    <!-- Выводим информацию о категории в виде ссылки -->
    <a href="javascript:expand('{generate-id(.)}')">
      <!-- Перед названием категории выводим соответствующую иконку -->
      <img height="16" width="16" border="0">
        <xsl:choose>
          <!--
           |   Если категория не содержит субэлементов,
           |   выводим иконку с точкой
           +-->
          <xsl:when test="not(*)">
            <xsl:attribute name="src">images/doc.gif</xsl:attribute>
          </xsl:when>
          <!--
           |   Если категория принадлежит ветке выбранной категории,
           |   выводим иконку с минусом, что означает раскрытую ветку
           +-->
          <xsl:when test="count(.|$path)=count($path)">
            <xsl:attribute name="src">images/minus.gif</xsl:attribute>
          </xsl:when>
          <!--
           |   Если категория не принадлежит ветке выбранной категории,
           |   выводим иконку с плюсом, что означает нераскрытую ветку
           +-->
          <xsl:otherwise>
            <xsl:attribute name="src">images/plus.gif</xsl:attribute>
          </xsl:otherwise>
        </xsl:choose>
      </img>
      <!--
       |   Выводим неразрывный пробел.
       |   &#xA0; в Unicode соответствует &nbsp;
       +-->
      <xsl:text>&#xA0;</xsl:text>
      <!-- Выводим название категории -->
      <xsl:value-of select="@title"/>
    </a>
    <br/><xsl:text>&#xA;</xsl:text>
    <!--
     |   Если категория принадлежит раскрываемой ветке.
     |   обрабатываем её подкатегории
     +-->
    <xsl:if test="count(.|$path)=count($path)">
      <xsl:apply-templates select="category">
        <!-- Увеличиваем отступ на три пробела -->
        <xsl:with-param
           name="indent"
           select="concat($indent,'&#xA0;&#xA0;&#xA0;')"/>
      </xsl:apply-templates>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>