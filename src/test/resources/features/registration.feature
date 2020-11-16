@kullaniciGiris
Feature: Kullanici kayit sayfasi

    Background:kullanici giris linkleri
    Given kullanici site "https://www.gmibank.com/" adresine gider
    And kullanici insan simgesine tiklar


  @register
  Scenario Outline:TC01_kullanici registration sayfasina kayit olur
    Given kullanici Register linkine tiklar
    And kullanici ssn numarasini "<ssn>" yazar
    And kullanici ad ve soyad "<ad>" ve "<soyad>" yazar
    And kullanici adresini "<adres>" yazar
    And kullanici cep telefonunu "<cep telefon>" yazar
    And kullanici username "<username>" yazar
    And kullanici e-mail adresini "<e-mail>" yazar
    And kullanici password "<password>" yazar
    And kullanici dogrulama password u "<confirm password>" tekrar yazar
    Then kullanici Register buttonuna tiklar ve "Registration saved! " iceren mesaji gorur

    Examples:Test Verileri
     |ssn        |ad      |soyad  |adres              |cep telefon  |username  |e-mail        |password  |confirm password  |
     |567-88-3629|kul|abdullah    |deneme street 67800|055-555-5555 |kl       |klemle@gmail.com |Forkul04. |Forkul04.         |
     |5637-88-1667|kul|abdullh    |deneme street 67800|055-555-5555 |kuol       |kalemi@gmail.com |Forkul04. |Forkul04.         |



