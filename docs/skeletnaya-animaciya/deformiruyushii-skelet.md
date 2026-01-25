import useBaseUrl from '@docusaurus/useBaseUrl';

# Деформирующий скелет

Деформирующий скелет представляет собой расширенную скелетную структуру, предназначенную для  деформации растровых изображений.\
Он применяется к нижележащим слоям изображения или к любому другому элементу, находящемуся в контексте деформации скелета (то есть к визуализированному результату нижележащих слоев)

**Создание Деформирующего скелета**

Для того, чтобы создать слой Деформирующего скелета, вам следует щелкнуть на знак “+”, далее из списка выберите “Искажение” - “Деформация скелета”

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_SWtO5C7_fVkEMdj5G3Va3IqOfbrhCxtXyVh8Q-09GRVgolhX-mvuP9pU7092oiGebd0cCfpwHMY7ckloB2oytd0RNQcyOaaX5P3MZ3GBcjSzKFTF0gsDsdpWhps5Rkrq3Zul4SlJ3nuUgepo-EeP1zA_490d734a348f.png')} alt="" /><figcaption><p>Рис. 1 Создание деформирующего скелета</p></figcaption></figure>

При создании скелета вы можете заметить, что все исчезло, это нормально, т.к. вы еще не установили на какие области воздействовать деформирующему скелету.\
\
**Редактирование деформирующего скелета**

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_9RXQgQt6ZZQPf1NIEJZWnlMYfEPvO1Gdcl_kr3gmwe_HQhz6D8gmonMbML-_dXOQc1C9ndH8BcxnT11zJG0A_3fjwYsQWj7lFP2R1RFm7BLiVwhIldH_kP0QZSDCpY5GLyM1-GRQ3IRk8lb6DTK-AM8_452ea514b51e.gif')} alt="" /><figcaption><p>Рис. 2 Редактирование деформирующего скелета</p></figcaption></figure>

Вам следует перейти в режим редактирование, для этого выключите галочку отвечающую за “отображение” слоя напротив деформирующего скелета. После этого, ваши слои снова будут отображаться на рабочей области.

Далее , установите область захвата с помощью “точек позиции пунктирного прямоугольника”.

Деформирующий скелет отличается тем, что он автоматически привязывает к себе слои, что расположены под ним, поэтому вам следует изолировать его вместе со слоями на которые он будет воздействовать с помощью группы.

Далее создайте и расположите дочерние кости в соответствии с их иерархией (смотрите подробнее в разделе “Создание скелета”).

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_xbrL0WHfkZDz4LZBHNuJ9AcK64P6i-8Nnt7GyDeygsAcOLKFcj9bbku9vIfoEtwDJg1G-NzPEEOuaUtuWQSyXh2yKyjZL7tqz4k1oJttYNrvVpNuOWDM_1uI_68uLy88sukMAss6viCYfWRY8BkBQU_a0f0aecda657.gif')} alt="" /><figcaption><p>Рис. 3 Создание дочерних костей</p></figcaption></figure>

**Точки скелета**

У деформирующего скелета есть 4 основные точки которые отвечают за разные задачи:\
<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_2zPwZ-IBjfFpc3Fk15GGqt0Z86-ODh4ht15XLxtV0YUML7BVD70bB_F-TWZBJlPyoRC4sXmvg2VpEXtGrtDNgwnnABIOA_R9u-4tzxbI_GiD5_ISdsgbR35XdNqO9O7e7cJMSfIsg1bk7hoxEN-BQdo_0e553ca24fa6.png')} alt="" data-size="line" />-эта точка позиции, которая отвечает за расположение объекта на рабочей области. По сути, это центр объекта вокруг которого происходят изменения.&#x20;

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0G-niGSPOhI7SaKWPk2P1E2PzP6H-EEf_v-XqCvi6v7S4Fk23QjvOX2doaZaQJoyWva_7nRGJ4XXhfnW-BaXvVfm4oLsNiiR4xVTVvMiIHfHVuOhxRLUKpov8L0VoeIE8FmunwWnXZl9wOtXNP4UavM_62bd72088422.png')} alt="" data-size="line" />- эта точка вершин, которая отвечает за расположение вершин на рабочей области. С помощью этой точки можно менять размеры и форму объекта.

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_459Tnxtx40pIEcwFWJKepHFdO8ux_pRBLaC5NU4B6tEEGpZUITQrtk7Tpnh2eEEpnunaHOJuWFNGE-wu8b5lcOAT70RpDe88KyPTyShqyJ8o1mr777dPnyNzNhrDPFrxqaBvd1ioeazJJYdD52tGkdU_0914c6b437cd.png')} alt="" data-size="line" />- эта точка углов. С ее помощью мы можем менять наклон объекта и вращать его вокруг центральной точки.

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_yNaPiuxj-QmfXKcOm7-emJ-_pykfKUAyKp9TA909auNtEYf8mla_e53Ztj4kGxjNYUWakRC8oVvx-ISOtrmX65KzZGC2ff1Y8XG2C3mCrWRHCnoxP6vuOwV4e61Xvw0EX2HW8xn5mAVOyQMRGD3_p94_6098ca69f69f.png')} alt="" data-size="line" />- это точка толщины. Применяется для того, чтобы настроить область воздействия. Чтобы она отображалась, вам следует щелкнуть на кнопку “Включения точек ширены” -![](/assets/lh7-us.googleusercontent.com_DY6Czah2yOWYQNhN4aN28ZYC6mrZcwnZ-e_b0pfCC3ZASEoBjqhcXso2coZ9Ubs04NFlyLPnejckuq8hHKZWcHzOBRYCjFEJkIoe1aim0HwtRmvWcovrSms-EiWkPhsUh1JaQAZ7_QDG6uts9LOG5EY_d0b0cb0e0a27.png), что расположена в верхней панели рабочей области.

**Настройка точек ширены**

Следующий и важный шаг на который следует уделить особое внимание - настройка областей.&#x20;

Часть слоя, которая захватывается областью - будет отображаться в итоговом варианте сборке. Поэтому, если какая-то часть вашего персонажа или объекта оказалась обрезанной, значит она не попала в область воздействия.&#x20;

Настраивайте область с помощью “точек ширины”, так, чтобы весь объект попадал в ее зону. Для этого, вам следует потянуть точку ширины в сторону, редактируя ее зону захвата. &#x20;

После проделанного алгоритма выше, включите галочку “Видимости слоя” рядом с деформирующим скелетом для того, чтобы начать анимировать его. Вы можете заметить, что ваш персонаж или объект исказился, для того, чтобы вернуть его в исходное положение, следует щелкнуть ПКМ по слою деформирующего скелета и выбрать из списка “Сбросить позу”. Теперь, вы можете работать со скелетом.

**Дополнение**

Во время настройки областей деформирующего скелета, некоторые из них могут пересекаться, это значит, что они будут воздействовать и тянуть слой в свою сторону, во время искажения.&#x20;

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_pvYW8Z15ZSMDbqwrKKSx78-Vl7_Rc-e_gcEXOjOpt6O3GetmXwHwIQWY3Q8U7-3wyMXqZ2C2CqtLqlpHO-a8q7yoF1IcwbdkgtRi_dsRmEh5U4RW2TvgyHezju-tU-8fjVddj-ZngxUiUCwuZoo4Gk_3517d6aa67c9.gif')} alt="" /><figcaption><p>Рис.4 Искажение</p></figcaption></figure>

Для того, чтобы избежать подобного эффекта, рекомендуем вам, привязывать разделенные часть далеко друг от друга, чтобы область принадлежащая, допустим, к руке не пересекалась с областью туловища, а уже потом собирать вместе.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_Dk3dXkuuld5WM01np3FlSfSZ1d1i6GSn3Co5zQH-7mLBevB1AmQw9i9F9GaNjxufQUWTugriqK01u7tvrxWgQAjbdrWXozuI048NekhMbl12dwJi5q5gjLpXfPMIVkNmW2WknjpHGgbafHfFb1xLYi4_dd6e41259061.gif')} alt="" /><figcaption><p>Рис. 5</p></figcaption></figure>

**Порядок костей**

После того как вы привяжите части к деформирующему скелету, может измениться расположение костей, а это значит, что слои что должны быть поверх других слоёв окажуться снизу.

Чтобы это исправить, на панеле “Параметры слоя” для каждой кости есть специальный параметр “Глубина на оси Z”, с его помощью вы как раз и можете отредактировать порядок костей. Чем выше число, тем дальше расположена кость. Для этого параметра можно использовать отрицательные числа.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_a07T5xNFuFKw5BE4DayMryGebfAb4yXljjgt0hTjHhPLFNdFCKjRxKM_4i2zV0lriKy1l5WuoV9TXRGOR9zSuTzBDhvBSq6hO-OO80_-BxnLWdGWc0aStqjT4onMuh378vNems8jnOtw4BDbObHSQwM_9180d39d04f3.gif')} alt="" /><figcaption><p>Рис. 6 </p></figcaption></figure>