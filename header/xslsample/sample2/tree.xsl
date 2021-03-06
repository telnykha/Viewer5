<?xml version="1.0" encoding="unicode" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:template match="/">
		<xsl:apply-templates />
	</xsl:template>
	<xsl:template match="xtree">
		<html>
			<head>
				<link rel="stylesheet" href="index.css" />
				<script type="text/javascript">
					var selectedLink = null, altKeyPress;
					
    				function SelectFromLink(link,navigate)
    				{
    					var obj = document.getElementById('###' + link);
    					if (selectedLink) selectedLink.className = "nodehyperlink";
    					obj.className = "nodehyperlink_sel";
    					selectedLink = obj;
    					obj = obj.parentElement;
						while (obj) {
							var id = obj.id.slice(9), img;
							try {
								eval("img=image"+id);
							}
							catch (e) {
								obj = obj.parentElement;
								continue;
							}
	    					eval("image" + id + ".src = 'img//minus.gif'");
	    					eval("image" + id + ".name = 'exp'");
	    					eval("nodeimage" + id + ".name = 'exp'");
	    					eval("documents" + id + ".style.display = 'block'");
							obj = obj.parentElement;
						}
						if (navigate) window.scrollTo(0, selectedLink.parentElement.offsetTop-64 );
						return selectedLink.innerText;
    				}
    				function ExpandNode(id)  
    				{
    					//var id = event.srcElement.parentElement.id.slice(4);
						
	    				eval("image" + id + ".src = 'img//minus.gif'");
	    				eval("image" + id + ".name = 'exp'");
	    				eval("nodeimage" + id + ".name = 'exp'");
	    				eval("documents" + id + ".style.display = 'block'");
	    				return false;
    				}
    				function CollapseNode(id)  
    				{
    					//var id = event.srcElement.parentElement.id.slice(4);
    					eval("image" + id + ".src = 'img//plus.gif'");
	    				eval("image" + id + ".name = 'col'");
	    				eval("nodeimage" + id + ".name = 'col'");
	    				eval("documents" + id + ".style.display = 'none'");
	    				return false;
    				}
    				function Toggle(div){
    				    var id = div.id.slice(4);
    				    if( div.expanded ){
    				        CollapseNode(id);
    				        div.expanded = false;
    				    }
    				    else {
    				        ExpandNode(id);
    				        div.expanded = true;
    				    }
    				}
					function ClickManager(event)
    				{
						var obj = event.srcElement;
     					var id = event.srcElement.id.toLowerCase();;
    					altKeyPress = event.altKey;
    					//console.log(obj);
						if ( id.indexOf('###') == 0 ) {
    						parent.OnLinkClicked(id.slice(3));
    					}
    					else {
						
                            var div = obj;
                            while( div = div.parentElement ){
								
								console.log(div.hasAttribute("toggleable"));
								console.log(div.toggleable);
                                if(div.hasAttribute("toggleable"))
									break;
                            }
                            if(div)
								Toggle( div );
                        }
    				}
					function DblClickManager()
    				{
    					var id = event.srcElement.id.toLowerCase();
    					if ( id.indexOf('nodeimage') == 0 ) event.srcElement.name == 'col' ? ExpandNode() : CollapseNode();
    				}
    				function on_load()
    				{
    				  //if (parent.treeLoaded) parent.treeLoaded();
    				}
                </script>
			</head>
			<body id = "bodyID" bgcolor="#d2e2ef" onload="on_load()" onselect="return false" style="margin-right:5px; margin-left:2px; margin-top:2px; margin-bottom:2px">
				<xsl:choose>
					<xsl:when test="@scroll">
						<xsl:attribute name="scroll">auto</xsl:attribute>
					</xsl:when>
					<xsl:otherwise>
						<xsl:attribute name="scroll">no</xsl:attribute>
					</xsl:otherwise>
				</xsl:choose>
				<xsl:attribute name="onclick">ClickManager(event)</xsl:attribute>
				<xsl:apply-templates />
				<br />
			</body>
		</html>
	</xsl:template>
	<xsl:template match="node">
		<!-- xsl:if test="@id[!='0']"></xsl:if -->
		<div class="nodeheader">
			<xsl:attribute name="id" >Node<xsl:number level="any" /></xsl:attribute>
			<xsl:attribute name="name" ><xsl:value-of select="@name" /></xsl:attribute>
			<xsl:attribute name="toggleable">true</xsl:attribute>
            <xsl:if test="@open"><xsl:attribute name="expanded">true</xsl:attribute></xsl:if>
            <xsl:choose>
				<xsl:when test="@open">
					<img src="img\\minus.gif" style='cursor: hand'>
						<xsl:attribute name="id">image<xsl:number level="any" /></xsl:attribute>
						<xsl:attribute name="name">exp</xsl:attribute>
					</img>
					<img src="img\\open.gif" style='cursor: hand'>
						<xsl:attribute name="id">nodeimage<xsl:number level="any" /></xsl:attribute>
						<xsl:attribute name="name">exp</xsl:attribute>
					</img>
				</xsl:when>
				<xsl:otherwise>
					<img src="img\\plus.gif" style='cursor: hand'>
						<xsl:attribute name="id">image<xsl:number level="any" /></xsl:attribute>
						<xsl:attribute name="name">col</xsl:attribute>
					</img>
					<img src="img\\closed.gif" style='cursor: hand'>
						<xsl:attribute name="id">nodeimage<xsl:number level="any" /></xsl:attribute>
						<xsl:attribute name="name">col</xsl:attribute>
					</img>
				</xsl:otherwise>
			</xsl:choose>
			<span class="nodetext" style="padding-left:5px;cursor: hand">
				<b>
					<xsl:value-of select="@name" />
				</b>
			</span>
		</div>
		<div class="nodedocuments">
			<xsl:choose>
				<xsl:when test="@open">
					<xsl:attribute name="style">display: block</xsl:attribute>
				</xsl:when>
				<xsl:otherwise>
					<xsl:attribute name="style">display: none</xsl:attribute>
				</xsl:otherwise>
			</xsl:choose>
			<xsl:attribute name="id">documents<xsl:number level="any" /></xsl:attribute>
			<xsl:apply-templates />
		</div>
	</xsl:template>
	<xsl:template match="document">
		<div class="document" style="padding-top:3px; padding-left:5px">
			<xsl:choose>
				<xsl:when test="@doc_url">
					<img>
						<xsl:attribute name="src">img//<xsl:value-of select="@doc_url" /></xsl:attribute>
					</img>
				</xsl:when>
				<xsl:otherwise>
					<img src='img//document.gif' />
				</xsl:otherwise>
			</xsl:choose>
			<a class="nodehyperlink" hidefocus="true">
				<xsl:attribute name="id">###<xsl:value-of select="@url" /></xsl:attribute>
				<xsl:choose>
					<xsl:when test="@doc_style">
						<xsl:attribute name="style">font-style:normal; padding-bottom:1px; padding-left:5px; <xsl:value-of select="@doc_style" /></xsl:attribute>
					</xsl:when>
					<xsl:otherwise>
						<xsl:attribute name="style">font-style:normal; padding-bottom:1px; padding-left:5px;</xsl:attribute>
					</xsl:otherwise>
				</xsl:choose>
				<xsl:apply-templates />
			</a>
		</div>
	</xsl:template>
	<xsl:template match="all_hr">
		<hr>
			<xsl:if test="@mar">
				<xsl:attribute name="style">margin-left:<xsl:value-of select="@mar" /></xsl:attribute>
			</xsl:if>
		</hr>
	</xsl:template>
	<xsl:template match="text()">
		<xsl:value-of select="." />
	</xsl:template>
</xsl:stylesheet>
