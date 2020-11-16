@PasswordPage
Feature: Ana sayfadaki sifre bolumu duzenlenebilir olmalidir.
  Scenario Outline: Kullanici gecerli kimlik bilgileriyle login olur

    Given Kullanici login sayfasina gider
    And  username textbox kutusuna gecerli username "<username>" girer
    And password textbox kutusuna gecerli password "<password>" girer
    And sign in butonuna tiklayarak giris yapar
    Then kullanici kendi username ini login kisminda gorur

    Examples: Gecerli data girilir
      |username|password|
      |customer01|3edc.%TGB:|

  @US_8_0
  Scenario: Kullanici ayarlar sayfasina gider
    Given Kullanici, kullanici adina tiklar
    And Kullanici password sekmesine tiklar

  @US_8_1
  Scenario:Kullanici mevcut passwordu degistirmek istediginde mevcut passwordu,yeni password olarak kullanamaz.
    And Kullanici Mevcut sifre "<3edc.%TGB:>", Yeni sifre ve Yeni sifre tekrar textboxlarinin hepsine mevcut sifreyi yazar
    And Kullanici Kaydet butonuna tiklar
    Then Kullanici mevcut passwordun yeni password olarak kullanilamadigini dogrular

  @US_8_2
  Scenario: Kullanici yeni passwordde kucuk harf kullandiginda seviye grafigi degisir.
    Given Kullanici Mevcut sifre "<3edc.%TGB:>" textboxina mevcut sifreyi girer
    And Kullanici Yeni sifre textboxina icinde kucuk harf olmayan alti haneli "<2!58.G>" password girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici alti haneli passworde yedinci hane olarak herhangi bir kucuk harf "<a>" ekler
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_3
  Scenario: Kullanici yeni passwordde buyuk harf kullandiginda seviye grafigi degisir.
    Given Kullanici Mevcut sifre "<3edc.%TGB:>" textboxina mevcut sifreyi girer
    And Kullanici Yeni sifre textboxina icinde buyuk harf olmayan alti haneli password "<2!58.g>" girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici alti haneli passworde yedinci hane olarak herhangi bir büyük harf "<A>" ekler
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_4
  Scenario: Kullanici yeni passwordde rakam kullandiginda seviye grafigi degisir.
    Given Kullanici Mevcut sifre "<3edc.%TGB:>" textboxina mevcut sifreyi girer
    And Kullanici Yeni sifre textboxina icinde rakam olmayan alti haneli password "<k!mX.g>" girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici alti haneli passworde yedinci hane olarak herhangi bir rakam "<5>" ekler
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_5
  Scenario: Kullanici yeni passwordde ozel karakter kullandiginda seviye grafigi degisir.
    Given Kullanici Mevcut sifre "<3edc.%TGB:>" textboxina mevcut sifreyi girer
    And Kullanici Yeni sifre textboxina icinde ozel karakter olmayan alti haneli bir "<k7mX2g>" password girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici alti haneli passworde yedinci hane olarak herhangi bir ozel karakter "<!>" ekler
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_6
  Scenario: Kullanici yeni passwordde 7 karakter kullandiginda seviye grafigi degisir.
    Given Kullanici Mevcut sifre "<3edc.%TGB:>" textboxina mevcut sifreyi girer
    And Kullanici Yeni sifre textboxina alti haneli bir password "<4r6AY.>" girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici Yeni sifre textboxina yedi haneli password "<4r6AY.a>" girer
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_7
  Scenario: Kullanici password basarili bir sekilde degistirir.
    Given Kullanici Mevcut sifre "<3edc.%TGB:>" textboxina mevcut sifreyi girer
    And Kullanici Yeni sifre textboxina gecerli passwordu "<4rfv.1QAY.>" girer
    And Kullanici Yeni Sifre Tekrar textboxina gecerli passwordu "<4rfv.1QAY.>" tekrar girer
    And Kullanici Kaydet butonuna tiklar
    Then Kullanici mevcut passwordun basarili bir sekilde degistigini dogrular

