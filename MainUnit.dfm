object viewer5Form: Tviewer5Form
  Left = 0
  Top = 0
  VertScrollBar.Visible = False
  BorderWidth = 2
  Caption = 'HTML5 JavaScript animation.'
  ClientHeight = 725
  ClientWidth = 1004
  Color = clBtnFace
  Constraints.MinHeight = 768
  Constraints.MinWidth = 1024
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  Position = poScreenCenter
  OnCreate = FormCreate
  OnResize = FormResize
  PixelsPerInch = 96
  TextHeight = 13
  object CppWebBrowser1: TCppWebBrowser
    Left = 0
    Top = 24
    Width = 1004
    Height = 701
    Align = alClient
    TabOrder = 0
    OnDocumentComplete = CppWebBrowser1DocumentComplete
    ExplicitWidth = 784
    ExplicitHeight = 537
    ControlData = {
      4C000000C4670000734800000000000000000000000000000000000000000000
      000000004C000000000000000000000001000000E0D057007335CF11AE690800
      2B2E12620A000000000000004C0000000114020000000000C000000000000046
      8000000000000000000000000000000000000000000000000000000000000000
      00000000000000000100000000000000000000000000000000000000}
  end
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 1004
    Height = 24
    Align = alTop
    BevelOuter = bvNone
    TabOrder = 1
    Visible = False
    object SpeedButton1: TSpeedButton
      AlignWithMargins = True
      Left = 383
      Top = 3
      Width = 89
      Height = 18
      Align = alLeft
      Caption = #1054' '#1055#1056#1054#1043#1056#1040#1052#1052#1045
      OnClick = SpeedButton1Click
      ExplicitLeft = 1
      ExplicitTop = 0
      ExplicitHeight = 37
    end
    object SpeedButton2: TSpeedButton
      AlignWithMargins = True
      Left = 977
      Top = 3
      Width = 24
      Height = 18
      Align = alRight
      Caption = 'X'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -11
      Font.Name = 'Tahoma'
      Font.Style = [fsBold]
      ParentFont = False
      OnClick = SpeedButton2Click
      ExplicitLeft = 744
      ExplicitTop = 0
      ExplicitHeight = 24
    end
    object SpeedButton3: TSpeedButton
      AlignWithMargins = True
      Left = 288
      Top = 3
      Width = 89
      Height = 18
      Align = alLeft
      Caption = #1057#1055#1056#1040#1042#1050#1040
      OnClick = SpeedButton3Click
      ExplicitLeft = 1
      ExplicitTop = 0
      ExplicitHeight = 37
    end
    object SpeedButton4: TSpeedButton
      AlignWithMargins = True
      Left = 193
      Top = 3
      Width = 89
      Height = 18
      Align = alLeft
      Caption = #1055#1056#1045#1047#1045#1053#1058#1040#1062#1048#1071
      OnClick = SpeedButton4Click
      ExplicitLeft = 1
      ExplicitTop = 0
      ExplicitHeight = 37
    end
    object SpeedButton5: TSpeedButton
      AlignWithMargins = True
      Left = 98
      Top = 3
      Width = 89
      Height = 18
      Align = alLeft
      Caption = #1057#1054#1044#1045#1056#1046#1040#1053#1048#1045
      OnClick = SpeedButton5Click
      ExplicitLeft = 1
      ExplicitTop = 0
      ExplicitHeight = 37
    end
    object SpeedButton6: TSpeedButton
      AlignWithMargins = True
      Left = 3
      Top = 3
      Width = 89
      Height = 18
      Align = alLeft
      Caption = 'HOME'
      OnClick = SpeedButton6Click
      ExplicitLeft = 1
      ExplicitTop = 0
      ExplicitHeight = 37
    end
  end
  object IdHTTPServer1: TIdHTTPServer
    Active = True
    Bindings = <>
    OnCommandGet = IdHTTPServer1CommandGet
    Left = 56
    Top = 56
  end
  object XMLDocument1: TXMLDocument
    Left = 128
    Top = 56
  end
end
