<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE eagle SYSTEM "eagle.dtd">
<eagle version="9.2.0">
<drawing>
<settings>
<setting alwaysvectorfont="no"/>
<setting verticaltext="up"/>
</settings>
<grid distance="0.1" unitdist="inch" unit="inch" style="lines" multiple="1" display="no" altdistance="0.01" altunitdist="inch" altunit="inch"/>
<layers>
<layer number="1" name="Top" color="4" fill="1" visible="no" active="no"/>
<layer number="2" name="Route2" color="1" fill="3" visible="no" active="no"/>
<layer number="3" name="Route3" color="4" fill="3" visible="no" active="no"/>
<layer number="4" name="Route4" color="1" fill="4" visible="no" active="no"/>
<layer number="5" name="Route5" color="4" fill="4" visible="no" active="no"/>
<layer number="6" name="Route6" color="1" fill="8" visible="no" active="no"/>
<layer number="7" name="Route7" color="4" fill="8" visible="no" active="no"/>
<layer number="8" name="Route8" color="1" fill="2" visible="no" active="no"/>
<layer number="9" name="Route9" color="4" fill="2" visible="no" active="no"/>
<layer number="10" name="Route10" color="1" fill="7" visible="no" active="no"/>
<layer number="11" name="Route11" color="4" fill="7" visible="no" active="no"/>
<layer number="12" name="Route12" color="1" fill="5" visible="no" active="no"/>
<layer number="13" name="Route13" color="4" fill="5" visible="no" active="no"/>
<layer number="14" name="Route14" color="1" fill="6" visible="no" active="no"/>
<layer number="15" name="Route15" color="4" fill="6" visible="no" active="no"/>
<layer number="16" name="Bottom" color="1" fill="1" visible="no" active="no"/>
<layer number="17" name="Pads" color="2" fill="1" visible="no" active="no"/>
<layer number="18" name="Vias" color="2" fill="1" visible="no" active="no"/>
<layer number="19" name="Unrouted" color="6" fill="1" visible="no" active="no"/>
<layer number="20" name="Dimension" color="15" fill="1" visible="no" active="no"/>
<layer number="21" name="tPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="22" name="bPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="23" name="tOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="24" name="bOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="25" name="tNames" color="7" fill="1" visible="no" active="no"/>
<layer number="26" name="bNames" color="7" fill="1" visible="no" active="no"/>
<layer number="27" name="tValues" color="7" fill="1" visible="no" active="no"/>
<layer number="28" name="bValues" color="7" fill="1" visible="no" active="no"/>
<layer number="29" name="tStop" color="7" fill="3" visible="no" active="no"/>
<layer number="30" name="bStop" color="7" fill="6" visible="no" active="no"/>
<layer number="31" name="tCream" color="7" fill="4" visible="no" active="no"/>
<layer number="32" name="bCream" color="7" fill="5" visible="no" active="no"/>
<layer number="33" name="tFinish" color="6" fill="3" visible="no" active="no"/>
<layer number="34" name="bFinish" color="6" fill="6" visible="no" active="no"/>
<layer number="35" name="tGlue" color="7" fill="4" visible="no" active="no"/>
<layer number="36" name="bGlue" color="7" fill="5" visible="no" active="no"/>
<layer number="37" name="tTest" color="7" fill="1" visible="no" active="no"/>
<layer number="38" name="bTest" color="7" fill="1" visible="no" active="no"/>
<layer number="39" name="tKeepout" color="4" fill="11" visible="no" active="no"/>
<layer number="40" name="bKeepout" color="1" fill="11" visible="no" active="no"/>
<layer number="41" name="tRestrict" color="4" fill="10" visible="no" active="no"/>
<layer number="42" name="bRestrict" color="1" fill="10" visible="no" active="no"/>
<layer number="43" name="vRestrict" color="2" fill="10" visible="no" active="no"/>
<layer number="44" name="Drills" color="7" fill="1" visible="no" active="no"/>
<layer number="45" name="Holes" color="7" fill="1" visible="no" active="no"/>
<layer number="46" name="Milling" color="3" fill="1" visible="no" active="no"/>
<layer number="47" name="Measures" color="7" fill="1" visible="no" active="no"/>
<layer number="48" name="Document" color="7" fill="1" visible="no" active="no"/>
<layer number="49" name="Reference" color="7" fill="1" visible="no" active="no"/>
<layer number="51" name="tDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="52" name="bDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="88" name="SimResults" color="9" fill="1" visible="yes" active="yes"/>
<layer number="89" name="SimProbes" color="9" fill="1" visible="yes" active="yes"/>
<layer number="90" name="Modules" color="5" fill="1" visible="yes" active="yes"/>
<layer number="91" name="Nets" color="2" fill="1" visible="yes" active="yes"/>
<layer number="92" name="Busses" color="1" fill="1" visible="yes" active="yes"/>
<layer number="93" name="Pins" color="2" fill="1" visible="no" active="yes"/>
<layer number="94" name="Symbols" color="4" fill="1" visible="yes" active="yes"/>
<layer number="95" name="Names" color="7" fill="1" visible="yes" active="yes"/>
<layer number="96" name="Values" color="7" fill="1" visible="yes" active="yes"/>
<layer number="97" name="Info" color="7" fill="1" visible="yes" active="yes"/>
<layer number="98" name="Guide" color="6" fill="1" visible="yes" active="yes"/>
</layers>
<schematic xreflabel="%F%N/%S.%C%R" xrefpart="/%S.%C%R">
<libraries>
<library name="frames" urn="urn:adsk.eagle:library:229">
<description>&lt;b&gt;Frames for Sheet and Layout&lt;/b&gt;</description>
<packages>
</packages>
<symbols>
<symbol name="DINA4_L" urn="urn:adsk.eagle:symbol:13867/1" library_version="1">
<frame x1="0" y1="0" x2="264.16" y2="180.34" columns="4" rows="4" layer="94" border-left="no" border-top="no" border-right="no" border-bottom="no"/>
</symbol>
<symbol name="DOCFIELD" urn="urn:adsk.eagle:symbol:13864/1" library_version="1">
<wire x1="0" y1="0" x2="71.12" y2="0" width="0.1016" layer="94"/>
<wire x1="101.6" y1="15.24" x2="87.63" y2="15.24" width="0.1016" layer="94"/>
<wire x1="0" y1="0" x2="0" y2="5.08" width="0.1016" layer="94"/>
<wire x1="0" y1="5.08" x2="71.12" y2="5.08" width="0.1016" layer="94"/>
<wire x1="0" y1="5.08" x2="0" y2="15.24" width="0.1016" layer="94"/>
<wire x1="101.6" y1="15.24" x2="101.6" y2="5.08" width="0.1016" layer="94"/>
<wire x1="71.12" y1="5.08" x2="71.12" y2="0" width="0.1016" layer="94"/>
<wire x1="71.12" y1="5.08" x2="87.63" y2="5.08" width="0.1016" layer="94"/>
<wire x1="71.12" y1="0" x2="101.6" y2="0" width="0.1016" layer="94"/>
<wire x1="87.63" y1="15.24" x2="87.63" y2="5.08" width="0.1016" layer="94"/>
<wire x1="87.63" y1="15.24" x2="0" y2="15.24" width="0.1016" layer="94"/>
<wire x1="87.63" y1="5.08" x2="101.6" y2="5.08" width="0.1016" layer="94"/>
<wire x1="101.6" y1="5.08" x2="101.6" y2="0" width="0.1016" layer="94"/>
<wire x1="0" y1="15.24" x2="0" y2="22.86" width="0.1016" layer="94"/>
<wire x1="101.6" y1="35.56" x2="0" y2="35.56" width="0.1016" layer="94"/>
<wire x1="101.6" y1="35.56" x2="101.6" y2="22.86" width="0.1016" layer="94"/>
<wire x1="0" y1="22.86" x2="101.6" y2="22.86" width="0.1016" layer="94"/>
<wire x1="0" y1="22.86" x2="0" y2="35.56" width="0.1016" layer="94"/>
<wire x1="101.6" y1="22.86" x2="101.6" y2="15.24" width="0.1016" layer="94"/>
<text x="1.27" y="1.27" size="2.54" layer="94">Date:</text>
<text x="12.7" y="1.27" size="2.54" layer="94">&gt;LAST_DATE_TIME</text>
<text x="72.39" y="1.27" size="2.54" layer="94">Sheet:</text>
<text x="86.36" y="1.27" size="2.54" layer="94">&gt;SHEET</text>
<text x="88.9" y="11.43" size="2.54" layer="94">REV:</text>
<text x="1.27" y="19.05" size="2.54" layer="94">TITLE:</text>
<text x="1.27" y="11.43" size="2.54" layer="94">Document Number:</text>
<text x="17.78" y="19.05" size="2.54" layer="94">&gt;DRAWING_NAME</text>
</symbol>
</symbols>
<devicesets>
<deviceset name="DINA4_L" urn="urn:adsk.eagle:component:13919/1" prefix="FRAME" uservalue="yes" library_version="1">
<description>&lt;b&gt;FRAME&lt;/b&gt;&lt;p&gt;
DIN A4, landscape with extra doc field</description>
<gates>
<gate name="G$1" symbol="DINA4_L" x="0" y="0"/>
<gate name="G$2" symbol="DOCFIELD" x="162.56" y="0" addlevel="must"/>
</gates>
<devices>
<device name="">
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="DWM1000">
<description>&lt;IEEE 802.15.4-2011 UWB Transceiver Module&lt;/b&gt;&lt;p&gt;
&lt;author&gt;Created by SamacSys&lt;/author&gt;</description>
<packages>
<package name="DWM1000">
<description>&lt;b&gt;DWM1000&lt;/b&gt;&lt;br&gt;
</description>
<smd name="1" x="-6.705" y="12.3" dx="2.45" dy="1" layer="1"/>
<smd name="2" x="-6.705" y="10.9" dx="2.45" dy="1" layer="1"/>
<smd name="3" x="-6.705" y="9.5" dx="2.45" dy="1" layer="1"/>
<smd name="4" x="-6.705" y="8.1" dx="2.45" dy="1" layer="1"/>
<smd name="5" x="-6.705" y="6.7" dx="2.45" dy="1" layer="1"/>
<smd name="6" x="-6.705" y="5.3" dx="2.45" dy="1" layer="1"/>
<smd name="7" x="-6.705" y="3.9" dx="2.45" dy="1" layer="1"/>
<smd name="8" x="-6.705" y="2.5" dx="2.45" dy="1" layer="1"/>
<smd name="9" x="-4.9" y="0.205" dx="2.45" dy="1" layer="1" rot="R90"/>
<smd name="10" x="-3.5" y="0.205" dx="2.45" dy="1" layer="1" rot="R90"/>
<smd name="11" x="-2.1" y="0.205" dx="2.45" dy="1" layer="1" rot="R90"/>
<smd name="12" x="-0.7" y="0.205" dx="2.45" dy="1" layer="1" rot="R90"/>
<smd name="13" x="0.7" y="0.205" dx="2.45" dy="1" layer="1" rot="R90"/>
<smd name="14" x="2.1" y="0.205" dx="2.45" dy="1" layer="1" rot="R90"/>
<smd name="15" x="3.5" y="0.205" dx="2.45" dy="1" layer="1" rot="R90"/>
<smd name="16" x="4.9" y="0.205" dx="2.45" dy="1" layer="1" rot="R90"/>
<smd name="17" x="6.705" y="2.5" dx="2.45" dy="1" layer="1"/>
<smd name="18" x="6.705" y="3.9" dx="2.45" dy="1" layer="1"/>
<smd name="19" x="6.705" y="5.3" dx="2.45" dy="1" layer="1"/>
<smd name="20" x="6.705" y="6.7" dx="2.45" dy="1" layer="1"/>
<smd name="21" x="6.705" y="8.1" dx="2.45" dy="1" layer="1"/>
<smd name="22" x="6.705" y="9.5" dx="2.45" dy="1" layer="1"/>
<smd name="23" x="6.705" y="10.9" dx="2.45" dy="1" layer="1"/>
<smd name="24" x="6.705" y="12.3" dx="2.45" dy="1" layer="1"/>
<text x="-0.575" y="12.066" size="1.27" layer="25" align="center">&gt;NAME</text>
<text x="-0.575" y="12.066" size="1.27" layer="27" align="center">&gt;VALUE</text>
<wire x1="-6.5" y1="23" x2="6.5" y2="23" width="0.2" layer="51"/>
<wire x1="6.5" y1="23" x2="6.5" y2="0" width="0.2" layer="51"/>
<wire x1="6.5" y1="0" x2="-6.5" y2="0" width="0.2" layer="51"/>
<wire x1="-6.5" y1="0" x2="-6.5" y2="23" width="0.2" layer="51"/>
<wire x1="-6.5" y1="23" x2="6.5" y2="23" width="0.2" layer="21"/>
<wire x1="6.5" y1="23" x2="6.5" y2="13.1" width="0.2" layer="21"/>
<wire x1="-6.5" y1="23" x2="-6.5" y2="13.1" width="0.2" layer="21"/>
<circle x="-8.708" y="13.043" radius="0.175" width="0.3" layer="25"/>
<wire x1="-6.5" y1="0" x2="-6.5" y2="1.7" width="0.2" layer="21"/>
<wire x1="6.5" y1="0" x2="6.5" y2="1.7" width="0.2" layer="21"/>
<wire x1="-6.5" y1="0" x2="-5.681" y2="0" width="0.2" layer="21"/>
<wire x1="6.5" y1="0" x2="5.681" y2="0" width="0.2" layer="21"/>
</package>
</packages>
<symbols>
<symbol name="DWM1000">
<wire x1="5.08" y1="2.54" x2="60.96" y2="2.54" width="0.254" layer="94"/>
<wire x1="60.96" y1="-30.48" x2="60.96" y2="2.54" width="0.254" layer="94"/>
<wire x1="60.96" y1="-30.48" x2="5.08" y2="-30.48" width="0.254" layer="94"/>
<wire x1="5.08" y1="2.54" x2="5.08" y2="-30.48" width="0.254" layer="94"/>
<text x="62.23" y="7.62" size="1.778" layer="95" align="center-left">&gt;NAME</text>
<text x="62.23" y="5.08" size="1.778" layer="96" align="center-left">&gt;VALUE</text>
<pin name="EXTON" x="0" y="0" length="middle"/>
<pin name="WAKEUP" x="0" y="-2.54" length="middle"/>
<pin name="RSTN" x="0" y="-5.08" length="middle"/>
<pin name="GPIO7" x="0" y="-7.62" length="middle"/>
<pin name="VDDAON" x="0" y="-10.16" length="middle"/>
<pin name="VDD3V3_1" x="0" y="-12.7" length="middle"/>
<pin name="VDD3V3_2" x="0" y="-15.24" length="middle"/>
<pin name="VSS_1" x="0" y="-17.78" length="middle"/>
<pin name="GPIO6_/_EXTRXE_/_SPIPHA" x="0" y="-20.32" length="middle"/>
<pin name="GPIO5_/_EXTTXE_/_SPIPOL" x="0" y="-22.86" length="middle"/>
<pin name="GPIO4_/_EXTPA" x="0" y="-25.4" length="middle"/>
<pin name="GPIO3_/_TXLED" x="0" y="-27.94" length="middle"/>
<pin name="GPIO2_/_RXLED" x="66.04" y="0" length="middle" rot="R180"/>
<pin name="GPIO1_/_SFDLED" x="66.04" y="-2.54" length="middle" rot="R180"/>
<pin name="GPIO0_/_RXOKLED" x="66.04" y="-5.08" length="middle" rot="R180"/>
<pin name="VSS_2" x="66.04" y="-7.62" length="middle" rot="R180"/>
<pin name="SPICSN" x="66.04" y="-10.16" length="middle" rot="R180"/>
<pin name="SPIMOSI" x="66.04" y="-12.7" length="middle" rot="R180"/>
<pin name="SPIMISO" x="66.04" y="-15.24" length="middle" rot="R180"/>
<pin name="SPICLK" x="66.04" y="-17.78" length="middle" rot="R180"/>
<pin name="VSS_3" x="66.04" y="-20.32" length="middle" rot="R180"/>
<pin name="IRQ/GPIO8" x="66.04" y="-22.86" length="middle" rot="R180"/>
<pin name="VSS_4" x="66.04" y="-25.4" length="middle" rot="R180"/>
<pin name="VSS_5" x="66.04" y="-27.94" length="middle" rot="R180"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="DWM1000" prefix="IC">
<description>&lt;b&gt;IEEE 802.15.4-2011 UWB Transceiver Module&lt;/b&gt;&lt;p&gt;
Source: &lt;a href="http://www.decawave.com/sites/default/files/resources/dwm1000-datasheet-v1.3.pdf"&gt; Datasheet &lt;/a&gt;</description>
<gates>
<gate name="G$1" symbol="DWM1000" x="0" y="0"/>
</gates>
<devices>
<device name="" package="DWM1000">
<connects>
<connect gate="G$1" pin="EXTON" pad="1"/>
<connect gate="G$1" pin="GPIO0_/_RXOKLED" pad="15"/>
<connect gate="G$1" pin="GPIO1_/_SFDLED" pad="14"/>
<connect gate="G$1" pin="GPIO2_/_RXLED" pad="13"/>
<connect gate="G$1" pin="GPIO3_/_TXLED" pad="12"/>
<connect gate="G$1" pin="GPIO4_/_EXTPA" pad="11"/>
<connect gate="G$1" pin="GPIO5_/_EXTTXE_/_SPIPOL" pad="10"/>
<connect gate="G$1" pin="GPIO6_/_EXTRXE_/_SPIPHA" pad="9"/>
<connect gate="G$1" pin="GPIO7" pad="4"/>
<connect gate="G$1" pin="IRQ/GPIO8" pad="22"/>
<connect gate="G$1" pin="RSTN" pad="3"/>
<connect gate="G$1" pin="SPICLK" pad="20"/>
<connect gate="G$1" pin="SPICSN" pad="17"/>
<connect gate="G$1" pin="SPIMISO" pad="19"/>
<connect gate="G$1" pin="SPIMOSI" pad="18"/>
<connect gate="G$1" pin="VDD3V3_1" pad="6"/>
<connect gate="G$1" pin="VDD3V3_2" pad="7"/>
<connect gate="G$1" pin="VDDAON" pad="5"/>
<connect gate="G$1" pin="VSS_1" pad="8"/>
<connect gate="G$1" pin="VSS_2" pad="16"/>
<connect gate="G$1" pin="VSS_3" pad="21"/>
<connect gate="G$1" pin="VSS_4" pad="23"/>
<connect gate="G$1" pin="VSS_5" pad="24"/>
<connect gate="G$1" pin="WAKEUP" pad="2"/>
</connects>
<technologies>
<technology name="">
<attribute name="ARROW_PART_NUMBER" value="DWM1000" constant="no"/>
<attribute name="ARROW_PRICE-STOCK" value="" constant="no"/>
<attribute name="DESCRIPTION" value="IEEE 802.15.4-2011 UWB Transceiver Module" constant="no"/>
<attribute name="HEIGHT" value="mm" constant="no"/>
<attribute name="MANUFACTURER_NAME" value="Decawave" constant="no"/>
<attribute name="MANUFACTURER_PART_NUMBER" value="DWM1000" constant="no"/>
<attribute name="RS_PART_NUMBER" value="" constant="no"/>
<attribute name="RS_PRICE-STOCK" value="" constant="no"/>
</technology>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="pinhead" urn="urn:adsk.eagle:library:325">
<description>&lt;b&gt;Pin Header Connectors&lt;/b&gt;&lt;p&gt;
&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="1X05" urn="urn:adsk.eagle:footprint:22354/1" library_version="3">
<description>&lt;b&gt;PIN HEADER&lt;/b&gt;</description>
<wire x1="1.905" y1="1.27" x2="3.175" y2="1.27" width="0.1524" layer="21"/>
<wire x1="3.175" y1="1.27" x2="3.81" y2="0.635" width="0.1524" layer="21"/>
<wire x1="3.81" y1="0.635" x2="3.81" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="3.81" y1="-0.635" x2="3.175" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="0.635" x2="-0.635" y2="1.27" width="0.1524" layer="21"/>
<wire x1="-0.635" y1="1.27" x2="0.635" y2="1.27" width="0.1524" layer="21"/>
<wire x1="0.635" y1="1.27" x2="1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="1.27" y1="0.635" x2="1.27" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="1.27" y1="-0.635" x2="0.635" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="0.635" y1="-1.27" x2="-0.635" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-0.635" y1="-1.27" x2="-1.27" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="1.905" y1="1.27" x2="1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="1.27" y1="-0.635" x2="1.905" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="3.175" y1="-1.27" x2="1.905" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-5.715" y1="1.27" x2="-4.445" y2="1.27" width="0.1524" layer="21"/>
<wire x1="-4.445" y1="1.27" x2="-3.81" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-3.81" y1="0.635" x2="-3.81" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="-3.81" y1="-0.635" x2="-4.445" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-3.81" y1="0.635" x2="-3.175" y2="1.27" width="0.1524" layer="21"/>
<wire x1="-3.175" y1="1.27" x2="-1.905" y2="1.27" width="0.1524" layer="21"/>
<wire x1="-1.905" y1="1.27" x2="-1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="0.635" x2="-1.27" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="-0.635" x2="-1.905" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-1.905" y1="-1.27" x2="-3.175" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-3.175" y1="-1.27" x2="-3.81" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="-6.35" y1="0.635" x2="-6.35" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="-5.715" y1="1.27" x2="-6.35" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-6.35" y1="-0.635" x2="-5.715" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-4.445" y1="-1.27" x2="-5.715" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="4.445" y1="1.27" x2="5.715" y2="1.27" width="0.1524" layer="21"/>
<wire x1="5.715" y1="1.27" x2="6.35" y2="0.635" width="0.1524" layer="21"/>
<wire x1="6.35" y1="0.635" x2="6.35" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="6.35" y1="-0.635" x2="5.715" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="4.445" y1="1.27" x2="3.81" y2="0.635" width="0.1524" layer="21"/>
<wire x1="3.81" y1="-0.635" x2="4.445" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="5.715" y1="-1.27" x2="4.445" y2="-1.27" width="0.1524" layer="21"/>
<pad name="1" x="-5.08" y="0" drill="1.016" shape="long" rot="R90"/>
<pad name="2" x="-2.54" y="0" drill="1.016" shape="long" rot="R90"/>
<pad name="3" x="0" y="0" drill="1.016" shape="long" rot="R90"/>
<pad name="4" x="2.54" y="0" drill="1.016" shape="long" rot="R90"/>
<pad name="5" x="5.08" y="0" drill="1.016" shape="long" rot="R90"/>
<text x="-6.4262" y="1.8288" size="1.27" layer="25" ratio="10">&gt;NAME</text>
<text x="-6.35" y="-3.175" size="1.27" layer="27">&gt;VALUE</text>
<rectangle x1="2.286" y1="-0.254" x2="2.794" y2="0.254" layer="51"/>
<rectangle x1="-0.254" y1="-0.254" x2="0.254" y2="0.254" layer="51"/>
<rectangle x1="-2.794" y1="-0.254" x2="-2.286" y2="0.254" layer="51"/>
<rectangle x1="-5.334" y1="-0.254" x2="-4.826" y2="0.254" layer="51"/>
<rectangle x1="4.826" y1="-0.254" x2="5.334" y2="0.254" layer="51"/>
</package>
<package name="1X05/90" urn="urn:adsk.eagle:footprint:22355/1" library_version="3">
<description>&lt;b&gt;PIN HEADER&lt;/b&gt;</description>
<wire x1="-6.35" y1="-1.905" x2="-3.81" y2="-1.905" width="0.1524" layer="21"/>
<wire x1="-3.81" y1="-1.905" x2="-3.81" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-3.81" y1="0.635" x2="-6.35" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-6.35" y1="0.635" x2="-6.35" y2="-1.905" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="6.985" x2="-5.08" y2="1.27" width="0.762" layer="21"/>
<wire x1="-3.81" y1="-1.905" x2="-1.27" y2="-1.905" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="-1.905" x2="-1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="0.635" x2="-3.81" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-2.54" y1="6.985" x2="-2.54" y2="1.27" width="0.762" layer="21"/>
<wire x1="-1.27" y1="-1.905" x2="1.27" y2="-1.905" width="0.1524" layer="21"/>
<wire x1="1.27" y1="-1.905" x2="1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="1.27" y1="0.635" x2="-1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="0" y1="6.985" x2="0" y2="1.27" width="0.762" layer="21"/>
<wire x1="1.27" y1="-1.905" x2="3.81" y2="-1.905" width="0.1524" layer="21"/>
<wire x1="3.81" y1="-1.905" x2="3.81" y2="0.635" width="0.1524" layer="21"/>
<wire x1="3.81" y1="0.635" x2="1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="2.54" y1="6.985" x2="2.54" y2="1.27" width="0.762" layer="21"/>
<wire x1="3.81" y1="-1.905" x2="6.35" y2="-1.905" width="0.1524" layer="21"/>
<wire x1="6.35" y1="-1.905" x2="6.35" y2="0.635" width="0.1524" layer="21"/>
<wire x1="6.35" y1="0.635" x2="3.81" y2="0.635" width="0.1524" layer="21"/>
<wire x1="5.08" y1="6.985" x2="5.08" y2="1.27" width="0.762" layer="21"/>
<pad name="1" x="-5.08" y="-3.81" drill="1.016" shape="long" rot="R90"/>
<pad name="2" x="-2.54" y="-3.81" drill="1.016" shape="long" rot="R90"/>
<pad name="3" x="0" y="-3.81" drill="1.016" shape="long" rot="R90"/>
<pad name="4" x="2.54" y="-3.81" drill="1.016" shape="long" rot="R90"/>
<pad name="5" x="5.08" y="-3.81" drill="1.016" shape="long" rot="R90"/>
<text x="-6.985" y="-3.81" size="1.27" layer="25" ratio="10" rot="R90">&gt;NAME</text>
<text x="8.255" y="-3.81" size="1.27" layer="27" rot="R90">&gt;VALUE</text>
<rectangle x1="-5.461" y1="0.635" x2="-4.699" y2="1.143" layer="21"/>
<rectangle x1="-2.921" y1="0.635" x2="-2.159" y2="1.143" layer="21"/>
<rectangle x1="-0.381" y1="0.635" x2="0.381" y2="1.143" layer="21"/>
<rectangle x1="2.159" y1="0.635" x2="2.921" y2="1.143" layer="21"/>
<rectangle x1="4.699" y1="0.635" x2="5.461" y2="1.143" layer="21"/>
<rectangle x1="-5.461" y1="-2.921" x2="-4.699" y2="-1.905" layer="21"/>
<rectangle x1="-2.921" y1="-2.921" x2="-2.159" y2="-1.905" layer="21"/>
<rectangle x1="-0.381" y1="-2.921" x2="0.381" y2="-1.905" layer="21"/>
<rectangle x1="2.159" y1="-2.921" x2="2.921" y2="-1.905" layer="21"/>
<rectangle x1="4.699" y1="-2.921" x2="5.461" y2="-1.905" layer="21"/>
</package>
<package name="1_05X2MM" urn="urn:adsk.eagle:footprint:22356/1" library_version="3">
<description>CON-M-1X5-200</description>
<text x="-4.5" y="1.5" size="1.27" layer="25" ratio="10">&gt;NAME</text>
<text x="-4.75" y="-2.75" size="1.27" layer="27">&gt;VALUE</text>
<wire x1="-5" y1="0.5" x2="-4.5" y2="1" width="0.1524" layer="21"/>
<wire x1="-4.5" y1="1" x2="-3.5" y2="1" width="0.1524" layer="21"/>
<wire x1="-3.5" y1="1" x2="-3" y2="0.5" width="0.1524" layer="21"/>
<wire x1="-3" y1="-0.5" x2="-3.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="-3.5" y1="-1" x2="-4.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="-4.5" y1="-1" x2="-5" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="-5" y1="0.5" x2="-5" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="-3" y1="0.5" x2="-2.5" y2="1" width="0.1524" layer="21"/>
<wire x1="-2.5" y1="1" x2="-1.5" y2="1" width="0.1524" layer="21"/>
<wire x1="-1.5" y1="1" x2="-1" y2="0.5" width="0.1524" layer="21"/>
<wire x1="-1" y1="-0.5" x2="-1.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="-1.5" y1="-1" x2="-2.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="-2.5" y1="-1" x2="-3" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="-3" y1="0.5" x2="-3" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="-1" y1="0.5" x2="-0.5" y2="1" width="0.1524" layer="21"/>
<wire x1="-0.5" y1="1" x2="0.5" y2="1" width="0.1524" layer="21"/>
<wire x1="0.5" y1="1" x2="1" y2="0.5" width="0.1524" layer="21"/>
<wire x1="1" y1="-0.5" x2="0.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="0.5" y1="-1" x2="-0.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="-0.5" y1="-1" x2="-1" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="-1" y1="0.5" x2="-1" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="1" y1="0.5" x2="1.5" y2="1" width="0.1524" layer="21"/>
<wire x1="1.5" y1="1" x2="2.5" y2="1" width="0.1524" layer="21"/>
<wire x1="2.5" y1="1" x2="3" y2="0.5" width="0.1524" layer="21"/>
<wire x1="3" y1="-0.5" x2="2.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="2.5" y1="-1" x2="1.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="1.5" y1="-1" x2="1" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="1" y1="0.5" x2="1" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="3" y1="0.5" x2="3.5" y2="1" width="0.1524" layer="21"/>
<wire x1="3.5" y1="1" x2="4.5" y2="1" width="0.1524" layer="21"/>
<wire x1="4.5" y1="1" x2="5" y2="0.5" width="0.1524" layer="21"/>
<wire x1="5" y1="0.5" x2="5" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="5" y1="-0.5" x2="4.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="4.5" y1="-1" x2="3.5" y2="-1" width="0.1524" layer="21"/>
<wire x1="3.5" y1="-1" x2="3" y2="-0.5" width="0.1524" layer="21"/>
<wire x1="3" y1="0.5" x2="3" y2="-0.5" width="0.1524" layer="21"/>
<pad name="1" x="-4" y="0" drill="1.016" diameter="1.3" shape="square" rot="R90"/>
<pad name="3" x="0" y="0" drill="1.016" diameter="1.3" rot="R90"/>
<pad name="2" x="-2" y="0" drill="1.016" diameter="1.3" rot="R90"/>
<pad name="4" x="2" y="0" drill="1.016" diameter="1.3" rot="R90"/>
<pad name="5" x="4" y="0" drill="1.016" diameter="1.3" rot="R90"/>
<rectangle x1="-4.254" y1="-0.254" x2="-3.746" y2="0.254" layer="51"/>
<rectangle x1="-2.254" y1="-0.254" x2="-1.746" y2="0.254" layer="51"/>
<rectangle x1="-0.254" y1="-0.254" x2="0.254" y2="0.254" layer="51"/>
<rectangle x1="1.746" y1="-0.254" x2="2.254" y2="0.254" layer="51"/>
<rectangle x1="3.746" y1="-0.254" x2="4.254" y2="0.254" layer="51"/>
</package>
</packages>
<packages3d>
<package3d name="1X05" urn="urn:adsk.eagle:package:22469/2" type="model" library_version="3">
<description>PIN HEADER</description>
<packageinstances>
<packageinstance name="1X05"/>
</packageinstances>
</package3d>
<package3d name="1X05/90" urn="urn:adsk.eagle:package:22467/2" type="model" library_version="3">
<description>PIN HEADER</description>
<packageinstances>
<packageinstance name="1X05/90"/>
</packageinstances>
</package3d>
<package3d name="1_05X2MM" urn="urn:adsk.eagle:package:22466/2" type="model" library_version="3">
<description>CON-M-1X5-200</description>
<packageinstances>
<packageinstance name="1_05X2MM"/>
</packageinstances>
</package3d>
</packages3d>
<symbols>
<symbol name="PINHD5" urn="urn:adsk.eagle:symbol:22353/1" library_version="3">
<wire x1="-6.35" y1="-7.62" x2="1.27" y2="-7.62" width="0.4064" layer="94"/>
<wire x1="1.27" y1="-7.62" x2="1.27" y2="7.62" width="0.4064" layer="94"/>
<wire x1="1.27" y1="7.62" x2="-6.35" y2="7.62" width="0.4064" layer="94"/>
<wire x1="-6.35" y1="7.62" x2="-6.35" y2="-7.62" width="0.4064" layer="94"/>
<text x="-6.35" y="8.255" size="1.778" layer="95">&gt;NAME</text>
<text x="-6.35" y="-10.16" size="1.778" layer="96">&gt;VALUE</text>
<pin name="1" x="-2.54" y="5.08" visible="pad" length="short" direction="pas" function="dot"/>
<pin name="2" x="-2.54" y="2.54" visible="pad" length="short" direction="pas" function="dot"/>
<pin name="3" x="-2.54" y="0" visible="pad" length="short" direction="pas" function="dot"/>
<pin name="4" x="-2.54" y="-2.54" visible="pad" length="short" direction="pas" function="dot"/>
<pin name="5" x="-2.54" y="-5.08" visible="pad" length="short" direction="pas" function="dot"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="PINHD-1X5" urn="urn:adsk.eagle:component:22529/4" prefix="JP" uservalue="yes" library_version="3">
<description>&lt;b&gt;PIN HEADER&lt;/b&gt;</description>
<gates>
<gate name="A" symbol="PINHD5" x="0" y="0"/>
</gates>
<devices>
<device name="" package="1X05">
<connects>
<connect gate="A" pin="1" pad="1"/>
<connect gate="A" pin="2" pad="2"/>
<connect gate="A" pin="3" pad="3"/>
<connect gate="A" pin="4" pad="4"/>
<connect gate="A" pin="5" pad="5"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:22469/2"/>
</package3dinstances>
<technologies>
<technology name=""/>
</technologies>
</device>
<device name="/90" package="1X05/90">
<connects>
<connect gate="A" pin="1" pad="1"/>
<connect gate="A" pin="2" pad="2"/>
<connect gate="A" pin="3" pad="3"/>
<connect gate="A" pin="4" pad="4"/>
<connect gate="A" pin="5" pad="5"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:22467/2"/>
</package3dinstances>
<technologies>
<technology name=""/>
</technologies>
</device>
<device name="5X2MM" package="1_05X2MM">
<connects>
<connect gate="A" pin="1" pad="1"/>
<connect gate="A" pin="2" pad="2"/>
<connect gate="A" pin="3" pad="3"/>
<connect gate="A" pin="4" pad="4"/>
<connect gate="A" pin="5" pad="5"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:22466/2"/>
</package3dinstances>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
</libraries>
<attributes>
</attributes>
<variantdefs>
</variantdefs>
<classes>
<class number="0" name="default" width="0" drill="0">
</class>
</classes>
<parts>
<part name="FRAME1" library="frames" library_urn="urn:adsk.eagle:library:229" deviceset="DINA4_L" device=""/>
<part name="IC1" library="DWM1000" deviceset="DWM1000" device=""/>
<part name="JP1" library="pinhead" library_urn="urn:adsk.eagle:library:325" deviceset="PINHD-1X5" device="" package3d_urn="urn:adsk.eagle:package:22469/2"/>
<part name="JP2" library="pinhead" library_urn="urn:adsk.eagle:library:325" deviceset="PINHD-1X5" device="" package3d_urn="urn:adsk.eagle:package:22469/2"/>
</parts>
<sheets>
<sheet>
<plain>
</plain>
<instances>
<instance part="FRAME1" gate="G$1" x="0" y="0"/>
<instance part="FRAME1" gate="G$2" x="162.56" y="0">
<attribute name="LAST_DATE_TIME" x="175.26" y="1.27" size="2.54" layer="94"/>
<attribute name="SHEET" x="248.92" y="1.27" size="2.54" layer="94"/>
<attribute name="DRAWING_NAME" x="180.34" y="19.05" size="2.54" layer="94"/>
</instance>
<instance part="IC1" gate="G$1" x="91.44" y="121.92">
<attribute name="NAME" x="96.774" y="128.778" size="1.778" layer="95" align="center-left"/>
<attribute name="VALUE" x="96.774" y="126.492" size="1.778" layer="96" align="center-left"/>
</instance>
<instance part="JP1" gate="A" x="116.84" y="78.74">
<attribute name="NAME" x="110.49" y="86.995" size="1.778" layer="95"/>
<attribute name="VALUE" x="110.49" y="68.58" size="1.778" layer="96"/>
</instance>
<instance part="JP2" gate="A" x="149.86" y="78.74">
<attribute name="NAME" x="143.51" y="86.995" size="1.778" layer="95"/>
<attribute name="VALUE" x="143.51" y="68.58" size="1.778" layer="96"/>
</instance>
</instances>
<busses>
</busses>
<nets>
<net name="IRQ" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="IRQ/GPIO8"/>
<wire x1="157.48" y1="99.06" x2="170.18" y2="99.06" width="0.1524" layer="91"/>
<label x="170.18" y="99.06" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="JP2" gate="A" pin="5"/>
<wire x1="147.32" y1="73.66" x2="129.54" y2="73.66" width="0.1524" layer="91"/>
<label x="129.54" y="73.66" size="1.778" layer="95"/>
</segment>
</net>
<net name="SPI-CS" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="SPICSN"/>
<wire x1="157.48" y1="111.76" x2="170.18" y2="111.76" width="0.1524" layer="91"/>
<label x="170.18" y="111.76" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="JP2" gate="A" pin="1"/>
<wire x1="147.32" y1="83.82" x2="129.54" y2="83.82" width="0.1524" layer="91"/>
<label x="129.54" y="83.82" size="1.778" layer="95"/>
</segment>
</net>
<net name="SPI-MOSI" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="SPIMOSI"/>
<wire x1="157.48" y1="109.22" x2="170.18" y2="109.22" width="0.1524" layer="91"/>
<label x="170.18" y="109.22" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="JP2" gate="A" pin="2"/>
<wire x1="147.32" y1="81.28" x2="129.54" y2="81.28" width="0.1524" layer="91"/>
<label x="129.54" y="81.28" size="1.778" layer="95"/>
</segment>
</net>
<net name="SPI-MISO" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="SPIMISO"/>
<wire x1="157.48" y1="106.68" x2="170.18" y2="106.68" width="0.1524" layer="91"/>
<label x="170.18" y="106.68" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="JP2" gate="A" pin="3"/>
<wire x1="147.32" y1="78.74" x2="129.54" y2="78.74" width="0.1524" layer="91"/>
<label x="129.54" y="78.74" size="1.778" layer="95"/>
</segment>
</net>
<net name="SPI-CLK" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="SPICLK"/>
<wire x1="157.48" y1="104.14" x2="170.18" y2="104.14" width="0.1524" layer="91"/>
<label x="170.18" y="104.14" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="JP2" gate="A" pin="4"/>
<wire x1="147.32" y1="76.2" x2="129.54" y2="76.2" width="0.1524" layer="91"/>
<label x="129.54" y="76.2" size="1.778" layer="95"/>
</segment>
</net>
<net name="RST" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="RSTN"/>
<wire x1="91.44" y1="116.84" x2="78.74" y2="116.84" width="0.1524" layer="91"/>
<label x="78.74" y="116.84" size="1.778" layer="95"/>
</segment>
<segment>
<pinref part="JP1" gate="A" pin="1"/>
<wire x1="114.3" y1="83.82" x2="96.52" y2="83.82" width="0.1524" layer="91"/>
<label x="96.52" y="83.82" size="1.778" layer="95"/>
</segment>
</net>
<net name="RXLED" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="GPIO2_/_RXLED"/>
<wire x1="157.48" y1="121.92" x2="170.18" y2="121.92" width="0.1524" layer="91"/>
<label x="170.18" y="121.92" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="JP1" gate="A" pin="5"/>
<wire x1="114.3" y1="73.66" x2="96.52" y2="73.66" width="0.1524" layer="91"/>
<label x="96.52" y="73.66" size="1.778" layer="95"/>
</segment>
</net>
<net name="TXLED" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="GPIO3_/_TXLED"/>
<wire x1="91.44" y1="93.98" x2="78.74" y2="93.98" width="0.1524" layer="91"/>
<label x="78.74" y="93.98" size="1.778" layer="95"/>
</segment>
<segment>
<pinref part="JP1" gate="A" pin="4"/>
<wire x1="114.3" y1="76.2" x2="96.52" y2="76.2" width="0.1524" layer="91"/>
<label x="96.52" y="76.2" size="1.778" layer="95"/>
</segment>
</net>
<net name="GND" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="VSS_1"/>
<wire x1="91.44" y1="104.14" x2="78.74" y2="104.14" width="0.1524" layer="91"/>
<label x="78.74" y="104.14" size="1.778" layer="95"/>
</segment>
<segment>
<pinref part="JP1" gate="A" pin="3"/>
<wire x1="114.3" y1="78.74" x2="96.52" y2="78.74" width="0.1524" layer="91"/>
<label x="96.52" y="78.74" size="1.778" layer="95"/>
</segment>
<segment>
<pinref part="IC1" gate="G$1" pin="VSS_3"/>
<wire x1="157.48" y1="101.6" x2="170.18" y2="101.6" width="0.1524" layer="91"/>
<label x="170.18" y="101.6" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="IC1" gate="G$1" pin="VSS_4"/>
<wire x1="157.48" y1="96.52" x2="170.18" y2="96.52" width="0.1524" layer="91"/>
<label x="170.18" y="96.52" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="IC1" gate="G$1" pin="VSS_5"/>
<wire x1="157.48" y1="93.98" x2="170.18" y2="93.98" width="0.1524" layer="91"/>
<label x="170.18" y="93.98" size="1.778" layer="95" rot="MR0"/>
</segment>
<segment>
<pinref part="IC1" gate="G$1" pin="VSS_2"/>
<wire x1="157.48" y1="114.3" x2="170.18" y2="114.3" width="0.1524" layer="91"/>
<label x="170.18" y="114.3" size="1.778" layer="95" rot="MR0"/>
</segment>
</net>
<net name="VCC" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="VDD3V3_1"/>
<wire x1="91.44" y1="109.22" x2="78.74" y2="109.22" width="0.1524" layer="91"/>
<label x="78.74" y="109.22" size="1.778" layer="95"/>
</segment>
<segment>
<pinref part="IC1" gate="G$1" pin="VDD3V3_2"/>
<wire x1="91.44" y1="106.68" x2="78.74" y2="106.68" width="0.1524" layer="91"/>
<label x="78.74" y="106.68" size="1.778" layer="95"/>
</segment>
<segment>
<pinref part="JP1" gate="A" pin="2"/>
<wire x1="114.3" y1="81.28" x2="96.52" y2="81.28" width="0.1524" layer="91"/>
<label x="96.52" y="81.28" size="1.778" layer="95"/>
</segment>
</net>
</nets>
</sheet>
</sheets>
</schematic>
</drawing>
<compatibility>
<note version="8.2" severity="warning">
Since Version 8.2, EAGLE supports online libraries. The ids
of those online libraries will not be understood (or retained)
with this version.
</note>
<note version="8.3" severity="warning">
Since Version 8.3, EAGLE supports URNs for individual library
assets (packages, symbols, and devices). The URNs of those assets
will not be understood (or retained) with this version.
</note>
<note version="8.3" severity="warning">
Since Version 8.3, EAGLE supports the association of 3D packages
with devices in libraries, schematics, and board files. Those 3D
packages will not be understood (or retained) with this version.
</note>
</compatibility>
</eagle>
