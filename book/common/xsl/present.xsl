<?xml version="1.0" encoding="unicode" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<xsl:apply-templates />
	</xsl:template>
	<xsl:template match="xtree">
		<html>
			<head>
				<link rel="stylesheet" href="..\index\index.css" />
				<script>
					var selected=0, states;

					function IsItemSelect(i)
					{
					var imgs = document.getElementsByTagName ("img");
					if( i &lt; imgs.length )
					{
					return imgs[i].state == "1";
					}
					return false;
					}

					function select()
					{
					event.srcElement.src = '../index/ref1.jpg';
					event.srcElement.onclick = unselect;
					event.srcElement.state = "1";
					++selected;
					parent.SelectChange();
					}

					function unselect()
					{
					event.srcElement.src = '../index/ref0.jpg';
					event.srcElement.onclick = select;
					event.srcElement.state = "0";
					--selected;
					parent.SelectChange();
					}
					function on_load()
					{
					}
				</script>
			</head>
			<body scroll="auto" bgcolor="#d2e2ef" onload="on_load()" oncontextmenu1="return false"
				onselect="return false" style="margin-right:5px; margin-left:2px; margin-top:2px; margin-bottom:2px">
				<table>
					<xsl:apply-templates />
				</table>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="document">
		<tr>
			<td>
				<img src="../index/ref0.jpg" style="cursor: hand">
					<xsl:attribute name="state">0</xsl:attribute>
					<xsl:attribute name="id">
					image 
					<xsl:number /> 
					</xsl:attribute>
					<xsl:attribute name="onclick">select();</xsl:attribute>
				</img>
			</td>
			<td>
				<span>
					<xsl:apply-templates />
				</span>
			</td>
		</tr>
	</xsl:template>
	<xsl:template match="B">
		<b>
			<xsl:apply-templates />
		</b>
	</xsl:template>
	<xsl:template match="b">
		<b>
			<xsl:apply-templates />
		</b>
	</xsl:template>
	<xsl:template match="SUB">
		<sub>
			<xsl:apply-templates />
		</sub>
	</xsl:template>
	<xsl:template match="sub">
		<sub>
			<xsl:apply-templates />
		</sub>
	</xsl:template>
	<xsl:template match="sup">
		<sup>
			<xsl:apply-templates />
		</sup>
	</xsl:template>
	<xsl:template match="SUP">
		<sup>
			<xsl:apply-templates />
		</sup>
	</xsl:template>
	<xsl:template match="I">
		<i>
			<xsl:apply-templates />
		</i>
	</xsl:template>
	<xsl:template match="i">
		<i>
			<xsl:apply-templates />
		</i>
	</xsl:template>
	<xsl:template match="U">
		<u>
			<xsl:apply-templates />
		</u>
	</xsl:template>
	<xsl:template match="u">
		<u>
			<xsl:apply-templates />
		</u>
	</xsl:template>
	<xsl:template match="text()">
		<xsl:value-of select="." />
	</xsl:template>
</xsl:stylesheet>
