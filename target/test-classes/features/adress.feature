@adress
  Feature: US_10 Employee adres olusturabilir
    Scenario:
      Given Kullanici login sayfasina gider
      And  username textbox kutusuna gecerli "Azizeke47" girer
      And password textbox kutusuna gecerli "Mardin4738." girer
      And sign in butonuna tiklayarak giris yapar
      And kullanici kendi username ini login kisminda gorur
      And Employee My operations a tiklar
      And Employee Manage customera tiklar
      And Employee Create a new customera tiklar
      And Employee SSN textboxina tiklar ve gecerli SSN numarsini girer
      And Employee serach boxa tiklar
      And Employee middle textboxina gecerli degeri girer
      And Employee phonenumber textboxina gecerli degeri girer
      And Employee zip code gecerli degri girer
      And Employee adress textboxina gecerli degeri girer
      And Employee city textboxina gecerli degeri girer
      And Employee country dropdownda gecerli ulkeyi secer
      And Employee state textboxina gecerli state girer
      And Employee accout secer
      And Employee zelle checkboxina tiklar
      Then Employee save butonuna tiklar ve basari mesajini alir

