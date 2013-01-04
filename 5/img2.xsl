<?xml version="1.0" encoding="utf8"?>
<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>	
	<body>
		<table border="1">
			<tr><th>URL (HREF)</th><th>Alternative text (ALT)	</th><th>Reference to</th></tr>
			<xsl:for-each select=".//img">
				<tr>
					<td><xsl:value-of select="@src"/></td>
					<td><xsl:value-of select="@alt"/></td>
					<td>
					<xsl:choose>
						<xsl:when test="ancestor::a">							
							<a href="{ancestor::a/@href}"><xsl:value-of select="ancestor::a/@href"/></a> 
						</xsl:when>
						<xsl:otherwise>
							<div style="background-color:green; color:white">not a reference</div>
						</xsl:otherwise>
					</xsl:choose>
					</td>
				</tr>
			</xsl:for-each>
		</table>
	</body>
</html>
</xsl:template>
</xsl:transform>