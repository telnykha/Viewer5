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
    Top = 0
    Width = 1004
    Height = 725
    Align = alClient
    TabOrder = 0
    OnDocumentComplete = CppWebBrowser1DocumentComplete
    ExplicitTop = 24
    ExplicitWidth = 784
    ExplicitHeight = 537
    ControlData = {
      4C000000C4670000EE4A00000000000000000000000000000000000000000000
      000000004C000000000000000000000001000000E0D057007335CF11AE690800
      2B2E12620A000000000000004C0000000114020000000000C000000000000046
      8000000000000000000000000000000000000000000000000000000000000000
      00000000000000000100000000000000000000000000000000000000}
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
