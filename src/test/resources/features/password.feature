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

  @US_8_1
  Scenario:Kullanici mevcut passwordu degistirmek istediginde mevcut passwordu,yeni password olarak kullanamaz.
    Given Kullanici password sayfasina gider
    And Kullanici "Mevcut sifre", "Yeni sifre ve "Yeni sifre tekrar" textboxlarinin hepsine mevcut sifreyi yazar
    And Kullanici "Kaydet" butonuna tiklar
    Then Kullanici mevcut passwordun yeni password olarak kullanilamadigini dogrular

  @US_8_2
  Scenario: Kullanici yeni passwordde kucuk harf kullandiginda seviye grafigi degisir.
    Given Kullanici "Mevcut sifre" textboxina mevcut sifreyi girer
    And Kullanici "Yeni sifre" textboxina icinde kucuk harf olmayan 6 haneli password girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici 6 haneli passworde 7. hane olarak herhangi bir kucuk harf ekler
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_3
  Scenario: Kullanici yeni passwordde buyuk harf kullandiginda seviye grafigi degisir.
    Given Kullanici "Mevcut sifre" textboxina mevcut sifreyi girer
    And Kullanici "Yeni sifre" textboxina icinde buyuk harf olmayan 6 haneli password girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici 6 haneli passworde 7. hane olarak herhangi bir büyük harf ekler
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_4
  Scenario: Kullanici yeni passwordde rakam kullandiginda seviye grafigi degisir.
    Given Kullanici "Mevcut sifre" textboxina mevcut sifreyi girer
    And Kullanici "Yeni sifre" textboxina icinde rakam olmayan 6 haneli password girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici 6 haneli passworde 7. hane olarak herhangi bir rakam ekler
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_5
  Scenario: Kullanici yeni passwordde ozel karakter kullandiginda seviye grafigi degisir.
    Given Kullanici "Mevcut sifre" textboxina mevcut sifreyi girer
    And Kullanici "Yeni sifre" textboxina icinde ozel karakter olmayan 6 haneli password girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici 6 haneli passworde 7. hane olarak herhangi bir ozel karakter ekler
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_6
  Scenario: Kullanici yeni passwordde 7 karakter kullandiginda seviye grafigi degisir.
    Given Kullanici "Mevcut sifre" textboxina mevcut sifreyi girer
    And Kullanici Yeni sifre" textboxina 6 haneli password girer
    And Kullanici seviye grafigini kontrol eder
    And Kullanici Yeni sifre textboxina 7 haneli password girer
    Then Kullanici seviye grafiginde degisim oldugunu dogrular

  @US_8_7
  Scenario: Kullanici password basarili bir sekilde degistirir.
    Given Kullanici Mevcut sifre textboxina mevcut sifreyi girer
    And Kullanici Yeni sifre textboxina gecerli passwordu girer
    And Kullanici Yeni Sifre Tekrar textboxina gecerli passwordu tekrar girer
    And Kullanici Kaydet butonuna tiklar
    Then Kullanici mevcut passwordun basarili bir sekilde degistigini dogrular

