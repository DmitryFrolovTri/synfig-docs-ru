import useBaseUrl from '@docusaurus/useBaseUrl';

# Группа фильтров

![](/assets/lh7-us.googleusercontent.com_PcUiIsRDtAeby024SjTZAqIFDrIxz3FlY96znpDh2Yvk0GZc0t5XA6TFsKjdFx6aXUtc4haZB-sbZdxelO1CBNVtqqOWNHjLV1_7nh3kNSCf--m8ZP8U6OothNbRurqDR1KXcZ4LPcwBX0rrgGhEnAA_8eacab04722b.png)

Группы фильтров действуют точно так же, как обычные группы, за единственным исключением – они не ограничивают область действия слоев. Это означает, что если вы поместите несколько слоев фильтра в группу фильтров, то они будут смешаны вместе и применены как единый фильтр к нижележащим слоям.

Для чего это полезно? Во-первых, если у вас есть комбинация фильтров, вы можете быстро включать и отключать их все вместе одним щелчком мыши.

Еще одним преимуществом является то, что с Группа фильтр вы можете лучше контролировать, в какой момент будет происходить смешивание. Кроме того, вы можете использовать смешивание для слоев, у которых его не должно быть (например, для переводов, растяжек и т.д.). Это позволяет вам легко создавать эффекты, такие как зеркальные отражения и сложные тени.

Чтобы было более понятно как работает эта группа-фильтр, распишем это на примере с отражением солнца над водой

**Пример**

Для начала нам нужно создать Солнце и положить его в “Групповой слой”

В данный момент это выглядит так:

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0Pc84ZiuskyV3AM8JzsvsckRIEBhwzKvUc9lRfkYM_IulLuygfBfnTuBsTRrxI8eqlHMf5OTbUQb_6wXs2gQRaQsMNDa7MFIpBPgPaOlDFGICjr_-fYUkPBbSvcJbFYNJ8kjTUfSzimNJT8Rc1k6KP8_606c1d0dac5f.png')} alt="" /><figcaption></figcaption></figure>

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_TchHlv9EAueGhUn_b54kKffBiOhWWo9048PFrt4rSEAmsDKjqDQbe5oQ1lQPfdLT_xGcD-tEi30knEnMH9ylRXZbZIarb7EL8a9wDFzoNRzoTfKhbZE-Ie6uyXPbqDyZPPlXWTj_ECR_eG-hUhY-5_A_d80cbbe3cbb8.png')} alt="" /><figcaption></figcaption></figure>

После чего добавляем Группу-фильтр кликаем на неё и переходим в параметры группы слева, по стандарту там будет Метод смешивания - Прямой, а нам нужно Совмещение

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_cYavzogY4w5H3tXbjhhFWxIDOA0zG0NYn211_-fWSXzw5AL_mqWtKur62miql7dBUYueJTm2GoRs-GEQoAAVcEVLuqxdGapiO3Uysee2q40FIqy5KChru967tI4JPBcBPtRGhIQ-Ny79SF4icU5RNQw_1842d964713c.png')} alt="" /><figcaption></figcaption></figure>

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_ZuzLVgMgHg6ofOX2pS2Ae0hx6ergjUrvbj858kktoS84W9h2xTO8W28NS_hObvp5WNKaWyTZXYfnt97857QuzO4xisu1nDD-rG9iRibixce4R9pvKB7Vbrzqn3JS1Pgxza7mnr5Yt79iIzg6zUF8iIA_9dc674d1b38a.png')} alt="" /><figcaption></figcaption></figure>

У нас получилось два Солнца

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_ivB31xV82F04VxSsclKDtJPuJQmPRpeiV2P44ALe7wBJwR5EudEKv9nTGjZ0SU3DFnouBeo6lQnqk29NXqLJ_CFZOPypSBuwB2zut82DJ0CrVGxHbeVRtrmlEDB0iPP_0X-6tzPOf-q6acI3P-hC9-s_5fc3f2312213.png')} alt="" /><figcaption></figcaption></figure>

И уже в самой группе создаем “Растяжение”.&#x20;

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_eJ_z3tE0f27C7XmpQK4EAtdmttrZBLoZVBXg0ZO0vhsEUJ_svwxvSiCGs5o46CDih3Ay3aYnI9B-kGvQjJbBLoXud2641Q_Bot5ubzxUYQca1oI1MuqADKgONWHazZ1jupv0jT6gbraNMxfTrHhCLw_d03ca3022814.png')} alt="" /><figcaption></figcaption></figure>

Далее с помощью этой функции редактируем наше Солнце тянув за контрольные точки. Здесь мы можем редактировать только “Величину” и “Центр”

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_RDweZJady7F-4quNYAdnwIhszqOBv9KjRwTR7CoGu7z3W-9Z3o1R6LTuRs6rIcXfhpSmHfU5yUF25tlKVS2vHhZUenpzNwpMmfTOvn2ABO6FCFGYaNYVPqbY7-Ag1FSeNF9Ql_UlmYAegEjSHTEIHbk_678d28e7c183.png')} alt="" /><figcaption></figcaption></figure>

Отредактировав наше “Растяжение” мы получаем второе Солнце как отражение

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_IVIavH6LHMgjk3Kz5C9zVePGRm52cq_VhtUC3UFbXDgFd6cYu0XY4fV_ouSJhBzQeXFfQwcCCfppwBnYvjC0KINFPKQVypgveJU2OnEc_-dBmWgL-WUhJl3oZZeGgPaiIYwPKkG_ednWURR2m4_ZmSA_c7f68ad1afd4.png')} alt="" /><figcaption></figcaption></figure>

Далее кликаем на нашу группу с Солнцем и теперь мы можем двигать и наблюдать как за объектом идёт его отражение

&#x20;

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_CheYzw7I2rVNH4UnmfH2Uu9xSZ7kv5_xWJ2pALHkKeJIr5fwS1ZhA2hJR8kGLjGATFtox-ygeq-_-bTLVbl9nG0aPc2UwCRmFZKDAqjxtFQgJAH2V9Ky5-r8HIkv_9ibM0U4R6ieJCRmg9RZLRHN1L4_d8e79922fbc4.gif')} alt="" /><figcaption></figcaption></figure>

Теперь уже можем добавить небо и воду  над которым солнце будет двигаться. Но перед этим нужно сгруппировать в Группу  “Группу фильтр” и “солнце”.

Зачем это нужно? Так как если мы будем создавать объекты под Группой фильтра, то он будет его видоизменять, в нашем случаем нам это не надо

Выглядит это таким образом: \


<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_oa6owtwXLT1lfiFxeAWxUDMA-5KE2DONoZJxhRV7gHrQStePWZ3sJAbddCi6BUHqLlN0Pi0QgfqjRMZCQZ2QLLBGXvLkaxcCmvX7-9eZXzJ3e8f8yCaZSBpSiPnipmIdZwD5P_qeKPOsg9L-M-tlWpo_1b71b3898104.png')} alt="" /><figcaption></figcaption></figure>

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_6n9F2vlrd04C587zFkkHBCbFKAntgVFmxqXno8yq0sJuBs_-xHNBHTDQr6fJlova4VWvBQ8qCkdh6KGVz8Pdj7E8KJeMR0-Ce4b_FRd20xU-3CVQAGOncsIVpaLjaPB6X_RQLyoc9BLeAs4c-XcUAi4_d15f99eab179.png')} alt="" /><figcaption></figcaption></figure>

&#x20;

&#x20; И то что на холсте:

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_CVx4lftHXHCTn0SGiMRivBjqfZDj-TSaqReIpheLdxGPlemA4xC5tVzqTypKA7yiV46qSc6j_apQ5Zn2-yNgUeormpaYoswBovMAoJZlW2Y4F6iGinCcxZ4cdFom7WA8HsjyIwy_YgmrvhtJknNT6qQ_a723244c5b57.jpg')} alt="" /><figcaption></figcaption></figure>

И как не должно:

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_zcvYNLahMq8Xhi7yaRbFO30cwIGkYw_-OIDtdkhjocaynerpT-uZxK_EhkD1KX-oPXTOxOA80q6kZ_3NeAYqgFl27F35sLqEHlCKKTdxqVbqAarjkRFEAUFVOXGsqEPu2MKJaX5-VexIsOMRHVVJ4zE_b412efe940a9.png')} alt="" /><figcaption></figcaption></figure>

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_7koFZe_-KRUncoelYU_GcKz7irtanWiVGSHdjbvFZW5_n8rihkpNCfazTY1oKWTTx6-4CIFcHLRtE2EgrFJW-_4z0BS1FbHmXZqROyy4lK6_CC1relk-QdrOEkY7iVkvcHKWaK5xqPZFllj3AZ_Z508_ae85249d12c0.jpg')} alt="" /><figcaption></figcaption></figure>

:::info
&#x20;Вода и небо приняли то же свойство что и солнце, т.к они были под Группой фильтра
:::

И финальное завершение - это изменение Непрозрачности у Группы фильтра.

С 1 на 0,5.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_cxD9NLbucU4eX84BENm8S6sgK0-3NNRkrpDyijDjXAPWkCKVhzXJuZ6weTkXv6A5NEsPFp5GAm6q4dD4nvtBfgMhvXpVtz8HONiVJJRBMvoPqbxCCszi-gtcf_k25VKOlInqZ4VHBI3kK56YEIW-nFg_fe9d8e1dc4b7.png')} alt="" /><figcaption></figcaption></figure>

Финальный результат:

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_TFF_hFEQ1p6qO3lR_XqMiNFAtQ0bkUkm5NSIJB7dljMqHjAAWp3D2RL4OdTSkVviCmDGKcsjxNrq6HfS8qEOmqh9gqGoMdrtycCyQV1b2jogzGmxecm9eFrHZbQkJ3SMDrKlY2ohEDwoPO8aJvbeh6g_51b809d18bf0.gif')} alt="" /><figcaption></figcaption></figure>

## Функции

* Объединяет слои
* Быстро включает и выключает фильтр
* Легче контролировать, в какой момент будет происходить смешивание
* Легко создавать эффекты (зеркальные отражения и сложные тени)