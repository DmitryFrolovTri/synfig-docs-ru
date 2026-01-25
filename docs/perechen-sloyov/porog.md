# Порог

![Значок зажима фильтра слоя.png](/assets/lh7-us.googleusercontent.com_qR-E0THXTuSwYR7R3OE7L7nFHNm0ovfJmBbJgRivG90_pF5llMVY-IF0r3oOprTrgBOGlpDO6_QnzCO_o0iI7cNlYfxUvo3TVUmiy2xXQM5vPky0SpGSSfcluDNI-ioR910c7tBFgImLRHeRtFRO3YE_819cf800c54d.png)

Фиксирующий слой используется для ограничения цвета определенным диапазоном значений компонентов.

Компоненты R, G, B и A (альфа) каждого пикселя вынуждены находиться в пределах диапазона Floor...Потолок.

Если параметр "Фиксирующий потолок" отключен, то учитывается только пол.

Если включена опция "Инвертировать минус", то пиксель со значением A меньше Floor сначала отрицается (-R, -G, -B, -A), а затем происходит нечто забавное, при котором все компоненты повышаются как минимум до Floor.&#x20;

| Имя                                                                                                                                                                                                    | Значение | Тип  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---- |
| [![Type bool icon.png](/assets/lh7-us.googleusercontent.com_2YVpizyZINCrCbBqsVCuyrqL6A7c15MhncvCOggEIx10AjuPk7kKSNMSvT26ElAwc-EUvFhX2T5wLyd0Z_-oGXNYhqC3lGs1S_lozHvI3n2A99xqfEq7BLKbqshJBRWhooPcHb2T9uUGioOampNjM4_66977ab9fce2.png)](/assets/lh7-us.googleusercontent.com_Bh8_-swEkUGrkJMU29_5CIEckL8BATanMGraNOwyGm-ZNU78s3bY2GfaPd7YJRoE4ksdyDaLXuoB8RZyOiQlvfWDJ9IZrXW93fZLghFb6DmLyUJnbrjjW9SDWmbwXgtA--v3PEJIJbh7EiQSsTv2ec_6143af8b70a2.png) Инвертировать отрицательное число |          | bool |
| [![Type bool icon.png](/assets/lh7-us.googleusercontent.com_2YVpizyZINCrCbBqsVCuyrqL6A7c15MhncvCOggEIx10AjuPk7kKSNMSvT26ElAwc-EUvFhX2T5wLyd0Z_-oGXNYhqC3lGs1S_lozHvI3n2A99xqfEq7BLKbqshJBRWhooPcHb2T9uUGioOampNjM4_66977ab9fce2.png)](/assets/lh7-us.googleusercontent.com_Bh8_-swEkUGrkJMU29_5CIEckL8BATanMGraNOwyGm-ZNU78s3bY2GfaPd7YJRoE4ksdyDaLXuoB8RZyOiQlvfWDJ9IZrXW93fZLghFb6DmLyUJnbrjjW9SDWmbwXgtA--v3PEJIJbh7EiQSsTv2ec_6143af8b70a2.png) Потолочный зажим                  |          | bool |
| [![Type real icon.png](/assets/lh7-us.googleusercontent.com_kaCdvbKFkQXhMMhiRHRHGYgRk7FEOimg5Rs3N9vllTAm30Eb_1blgiYdo7cgJkmKX5s80Z8B6ppuQw7ibcUhgnXCwOwxwKYcls-yMU0k3hSkWv7tNMTPr1CNlsu6a3TUFvuapN28Rdsh27q6l0JbN9A_b26402ba0053.png)](/assets/lh7-us.googleusercontent.com_1grDqBfDBYDOf3ZASW4s1C5N6q_J9KR-2jT-0sftfn9FP3iyJMKYp76UWbVCWOwRdjaOynkAw5IcfmDzlym4SPCIjSgEhwkeZlPesdQwxS_us0o24NNBzUKZCNofriqtk80TMTxSQNIRdIQyPSTmlYk_cc2d38dbc3b7.png) Потолок                           | 1.000000 | real |
| [![Type real icon.png](/assets/lh7-us.googleusercontent.com_kaCdvbKFkQXhMMhiRHRHGYgRk7FEOimg5Rs3N9vllTAm30Eb_1blgiYdo7cgJkmKX5s80Z8B6ppuQw7ibcUhgnXCwOwxwKYcls-yMU0k3hSkWv7tNMTPr1CNlsu6a3TUFvuapN28Rdsh27q6l0JbN9A_b26402ba0053.png)](/assets/lh7-us.googleusercontent.com_1grDqBfDBYDOf3ZASW4s1C5N6q_J9KR-2jT-0sftfn9FP3iyJMKYp76UWbVCWOwRdjaOynkAw5IcfmDzlym4SPCIjSgEhwkeZlPesdQwxS_us0o24NNBzUKZCNofriqtk80TMTxSQNIRdIQyPSTmlYk_cc2d38dbc3b7.png) пол                               | 0.000000 | real |

\