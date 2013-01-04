<?xml version="1.0" encoding="utf8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
	<head><title>Books</title></head>
<body>
	<table border="1">
	<tr><th>Author</th><th>Book</th></tr>
	<xsl:for-each select="bookstore/author">
		<tr>
		<td><xsl:value-of select="concat(@fn,' ',@ln)"/></td>
		<td>		
		<xsl:for-each select="books/book">
			<xsl:value-of select="@title" /><br/>
		</xsl:for-each>		
		</td>
		</tr>
	</xsl:for-each>
	</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
