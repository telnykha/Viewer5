object viewer5Form: Tviewer5Form
  Left = 0
  Top = 0
  VertScrollBar.Visible = False
  BorderStyle = bsNone
  ClientHeight = 678
  ClientWidth = 849
  Color = clBtnFace
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
    Width = 849
    Height = 678
    Align = alClient
    TabOrder = 0
    OnNavigateComplete2 = CppWebBrowser1DocumentComplete
    OnDocumentComplete = CppWebBrowser1DocumentComplete
    OnWindowClosing = CppWebBrowser1WindowClosing
    ExplicitLeft = 456
    ExplicitTop = 248
    ExplicitWidth = 300
    ExplicitHeight = 150
    ControlData = {
      4C000000BF570000134600000000000000000000000000000000000000000000
      000000004C000000000000000000000001000000E0D057007335CF11AE690800
      2B2E126208000000000000004C0000000114020000000000C000000000000046
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
    Left = 120
    Top = 56
  end
end
