import useBaseUrl from '@docusaurus/useBaseUrl';

# Дублировать

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_Rk0Cnjwk4TCM1zxxqu1If4c7vhncFmifXo0K05NOtG1eD8gT4SagOJZwzmyr0j8xpsA0BizdQfpYAt8KxjH1Kb1NNe2_Y6RakddUe64lKsYbgAjDmbGlBqSAcnSxhf77YEUnt0XldlbiEPBAmZekMv4_291dcf550ae8.png')} alt="Layer_other_duplicate_icon.png" data-size="original" />

Дублирующий слой  создает несколько копий слоев под ним в режиме реального времени.

Дублирующий слой работает как цикл над содержимым под ним и предоставляет изменяющуюся переменную для этого содержимого. Эта переменная (индекс экспорта) теперь может использоваться в этом контенте.

**Параметры дублирующего слоя:**

| Имя                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Значение    | Тип         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| <img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png')} alt="Real_icon.png" data-size="line" /> Параметр глубины Z                                                                                                                                                                                                                                                 | 0.000000    | реальный    |
| <img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png')} alt="Real_icon.png" data-size="line" /> Непрозрачность                                                                                                                                                                                                                                                     | 1.000000    | реальный    |
| <img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_7l6pE2zGGMtPa_G4HDWdHbj7CaCtBpPXa2HgABBkOv5vg2zKtV27RR9u0pPvlhtxbXlv_S3UunNIPDvfWibUbX1ZoA1H4WmGhS-6z-QLEduNm1GXGfCOV3Jg8ibhm7Hw85bUe48T0PzzaDL2lgGhg40_6487be6c3541.png')} alt="Integer_icon.png" data-size="line" /> Метод наложения                                                                                                                                                                                                                                                 | Композитный | целое число |
| <img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0yZ1YyARITCvtIGYdm7hlY5XT0zR0oWWMLhq3amQkcAlrWsMLd8zbA4Ess3-2lzN3wHe51Uo3y0DesOW80gHNE8uOchJBOUzMappTqPUqJo0tfSYiOpk_wVhojfxNV9Bn47ZW2EkzylcZ8QHgrC77LY_8d42e329a7f7.png')} alt="Real_icon.png" data-size="line" /> Индекс (номер 1)<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_cfYj60f0qS72ycmtj_Q-w1zAsN3QDILSd1MmlEDjweqvpCeoGidGRMWBakSsXaG7knBl25j9j9BnDCzWFgw5m6JLGBw1h5MPBlQxpChTNjRlW5ZDXX-N2I8ixry5u1Bf1JS_Cf_ZQxrHn8CxHGNzHr4_35c941e798fb.png')} alt="Valuenode_icon.png" data-size="line" /> | 3.000000    | Дублировать |

#### Параметр Индекс

Индекс Автоматически экспортируется. Это единственное значение, которое будет меняться от одной копии к другой. Затем это экспортированное значение можно выбрать на панели библиотеки и подключиться к параметрам в слое в диалоговом окне дублирования, которые должны изменяться при копировании.

У Индекса  есть 3 подпараметра, "От", "До" и "Шаг". Значение экспортируемого Индекса параметра варьируется от значения "От" до значения "До" в зависимости от размера "Шага".

"От" может быть выше или ниже, чем "До". Не имеет значения, является ли Step положительным или отрицательным. Шаги будут выполняться в направлении от "От" к "До".

Дублированные слои располагаются в стеке слоев по порядку, так что те, которые соответствуют "От" значению, будут отображаться ниже (т. е. Наименее заметны в обычном режиме композитного наложения), чем те, которые соответствуют To значению (наиболее заметны).

**Нюансы на данный момент:**&#x20;

* Дублирующий слой ничего не делает с ограничивающими рамками. Это может помочь ускорить рендеринг, когда дублирующиеся слои находятся за пределами видимой области. Неясно, насколько это было бы полезно или возможно. Чтобы вычислить ограничивающую рамку, дублирующему слою потребуется перебрать все значения Index, чтобы получить базовые ограничивающие рамки и объединить их вместе. Возможно, это все равно стоит сделать.
* Редактирование Контура под дублирующим слоем становится очень сложным, пока выполняется недавняя правка, поскольку маркеры контура перемещаются по мере выполнения рендеринга (если дубликаты находятся в разных положениях или масштабе). Я попытался использовать тот же мьютекс вокруг метода operator дублирующего ValueNode, который используется в коде дублирующего слоя, но это привело к взаимоблокировке.