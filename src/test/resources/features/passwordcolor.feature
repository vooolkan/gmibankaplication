@US_03
Feature: Kayıt sayfası, parola kullanımını güvenli ve yüksek düzeyli bir parola ile sınırlamalıdır

  Background: Kullanıcı GMi Bank ana sayfasına gider (https://gmibank.com/)
    Given Kullanıcı GMi Bank ana sayfasına gider
    And kullanıcı düğmesine tıklayın
    And Kayıt sayfasına gitmelisiniz
    And Şifre metin kutusuna tıklayın


  @TC-03_010
  Scenario:Daha güçlü parola için en az bir küçük harf olmalıdır ve buna göre seviye grafiğinin değiştiğini görün
    And En az dort karakterden oluşan bir kücük harf iceren bir şifre girin
    And Renkli cizgi turuncu baslamalidir
    And Şifre onayı metin kutusuna tıklayın
    Then En az dört karakterden oluşan bir kücük harf iceren bir şifre girin


  @TC-03_002
  Scenario: En az bir büyük harf olmalı ve seviye grafiğinin buna göre değiştiğini görün
    And En az dort karakterden oluşan bir büyük harf iceren bir şifre girin
    And Renkli cizgi kirmizi olmalıdır
    And Şifre onayı metin kutusuna tıklayın
    Then En az dört karakterden oluşan bir büyük harf iceren bir şifre girin

  @TC-03_003
  Scenario: En az bir hane olmalı ve seviye çizelgesinin buna göre değiştiğini görün
    And en az dort karakterden oluşan bir basamaklı bir şifre girin
    And Renkli cizgi kırmızı veya turuncu olmalıdır
    And Şifre onayı metin kutusuna tıklayın
    Then En az dört karakterden oluşan bir basamaklı bir şifre girin

  @TC-03_004
  Scenario: En az bir özel karakter olmalı ve seviye çubuğunun buna göre değiştiğini görün
    And en az dort karakterden oluşan bir özel karakter iceren bir şifre girin
    And Renkli cizgi turuncu olmalıdır
    And Şifre onayı metin kutusuna tıklayın
    Then en az dört karakterden oluşan bir özel karakter iceren ikinci metin kutusuna girin

  @TC-03_005
  Scenario: Daha güçlü bir parola için en az yedi karakter olmalıdır
    And Yedi karakterli bir şifre girin
    And Renkli cizgi yeşil olmalıdır
    And Şifre onayı metin kutusuna tıklayın
    And ikinci kismada Yedi karakterli bir şifre girin



































