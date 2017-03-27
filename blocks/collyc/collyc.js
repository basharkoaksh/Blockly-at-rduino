/**
 * Block pour le TestCd
 * @author Moi
 */
'use strict';

goog.provide('Blockly.Blocks.collyc');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//@CD 20170311
Blockly.Blocks.collyc_clavier12_touche_appuyee = {
  init: function() {
    this.setColour(Blockly.Blocks.collyc.HUE);
    this.setHelpUrl(Blockly.Msg.COLLYC_TOUCHE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.COLLYC_TOUCHE_TEXT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/collyc/Clavier12.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("L1")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLLYC_TOUCHE_LIGNE1);
    this.appendValueInput("L2")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLLYC_TOUCHE_LIGNE2);
    this.appendValueInput("L3")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLLYC_TOUCHE_LIGNE3);
    this.appendValueInput("L4")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLLYC_TOUCHE_LIGNE4);
    this.appendValueInput("C1")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLLYC_TOUCHE_COLONNE1);
    this.appendValueInput("C2")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLLYC_TOUCHE_COLONNE2);
    this.appendValueInput("C3")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLLYC_TOUCHE_COLONNE3);
  	this.setOutput(true, Blockly.Types.TEXT.checkList);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setTooltip(Blockly.Msg.COLLYC_TOUCHE_TOOLTIP);
  }
};