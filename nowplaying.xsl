<!-- place this as nowplaying.xsl into the same folder as the icecast stats.xsl and make it world readable. (check the mount points) -->

<xsl:stylesheet xmlns:xsl = "http://www.w3.org/1999/XSL/Transform" version = "1.0">
<xsl:output method="text" encoding="UTF-8" indent="yes" />
<xsl:template match = "/icestats" >
<xsl:for-each select="source">
<xsl:if test="@mount='/autodj'">
<xsl:if test="artist"><xsl:value-of select="artist" /> - </xsl:if><xsl:value-of select="title" />
</xsl:if>
<xsl:if test="@mount='/stream'">
<xsl:if test="artist"><xsl:value-of select="artist" /> - </xsl:if><xsl:value-of select="title" />
</xsl:if>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>