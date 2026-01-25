import useBaseUrl from '@docusaurus/useBaseUrl';

# Группирование слоев

Группа - это специальный слой, который может содержать другие слои.

:::info
В Synfig Studio мы можем сгруппировать несколько слоёв и работать с ними как с одним объектов.
:::

Помимо группировки набора слоев, он также может применять преобразования к содержащимся слоям, такие как перевод, масштабирование и даже изменять их смещение по времени.

## **Параметры Группового слоя**

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_APWpGZVy5YFx0Bw5tKdEyFlk3SevGS5a85xxILS7O5qosMrIZSXkMFA5Yhdw7qEgUDPaQpSqapXJJj0xUv-0g9mc3iLGyrgoDgMTyckQjOXktxgb_QLX8tL849UPbJGqO30YG9Njngn0YLAdPaK-3EM_116e74ba7115.png')} alt="" /><figcaption></figcaption></figure>

Параметр “Преобразование” является составным параметром, он содержит смещение, угол поворота, угол перекоса и значение масштаба для группы.

“Преобразование” Параметр уже [преобразуется](https://synfig.readthedocs.io/en/latest/converters/composite.html#converter-composite) при создании [группового слоя](https://synfig.readthedocs.io/en/latest/layers/group.html#layer-group) и, таким образом, напрямую предоставляет подпараметры параметров смещения, поворота, перекоса и масштабирования.

Точно также как у слоя изображения, у группы есть точки за которые мы можем изменять её положение размер и прочее. Более подробно про контрольные точки можно посмотреть в разделе: “Параметры на рабочей области" - "Контрольные точки, их цвета и типы”.

**Виды групп**

<table data-view="cards" data-full-width="true"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><p><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_JHCsYCiQC8ezzbOk1-A8_rgBn8BL5RaxZ7me4AHBpzgeZ-Iboj2fIgAV6yUxN_AFteygEXKYDKFPrEsA-GODjBkUulg9u2Jqas8iAhYpB4bDp1K6B9J6EJ3-NdEugHA8piq8PSiBsFFnG7JqwxGBbIc_70580b91b633.png')} alt="" data-size="original" /></p><p>**Группа**</p></td><td></td><td></td></tr><tr><td><p><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_tAnKI-OpVc2EDZSa3TexqbGJdTC0BA67PeiVid4xcTs6GNCClcIANPMzSp4cUlx7sw5hcH7n0hSWrr1iztxINLU0TB_jYzGWKxQghA_pmO8t9EDWtfO96T9wkEgqZcvoIoX5HZNJZAmbEvgJS8ZbK8Y_2ddc9048f0d2.png')} alt="" data-size="original" /></p><p>**Группа переключатель**</p></td><td></td><td></td></tr><tr><td><p><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_PcUiIsRDtAeby024SjTZAqIFDrIxz3FlY96znpDh2Yvk0GZc0t5XA6TFsKjdFx6aXUtc4haZB-sbZdxelO1CBNVtqqOWNHjLV1_7nh3kNSCf--m8ZP8U6OothNbRurqDR1KXcZ4LPcwBX0rrgGhEnAA_8eacab04722b.png')} alt="" data-size="original" /></p><p>**Группа фильтров**</p></td><td></td><td></td></tr></tbody></table>

Подробнее смотрите о "Группе-переключателе" в разделе "Слой-переключатель". Подробнее о "Группе фильров" смотрите в разделе "Группа фильтров"

## **Функции группы**

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_bYvuRJEjYBSug18tkMgjClRroIo3o3LrW8bAkwMogz01UThvTgna5v827PBBkZ8HMoQQK8FYq-A1UqzOyL1FLPl3dYXVBZVUCjteMerQfhCRol1nkMSI6lIYvrl4QCrWZB1hx8fbae6KHPM-rVN_wnQ_6c82025fd53c.png')} alt="" /><figcaption></figcaption></figure>

* Объединяет слои
* Изолирует воздействие фильтров
* Работает как отдельный объект

**Трансформация групп**

Трансформация групп происходит с помощью Контрольных точек слоя, при выделении слоя появляются контрольные точки с помощью которых мы можем редактировать объект на рабочей области, но у каждого слоя свои контрольные точки. Но сейчас нам нужны точки именно группы

## Точки вершин группы и изображений

С помощью точек вершин можно перемещать объекты по холсту, увеличивать, растягивать и.т.д.

<figure><img src={useBaseUrl('/img/gitbook/pasted image3 0.png')} alt="" /><figcaption><p>Точки вершин</p></figcaption></figure>

<img src={useBaseUrl('/img/gitbook/1 (5).png')} alt="" data-size="line" /> - зелёная точка является ключевой опорной точкой для группы объектов или изображения. Все операции по изменению масштаба, повороту и наклону группы или изображения происходят относительно этой точки. Также она отвечает за перемещение объекта.

<figure><img src={useBaseUrl('/img/gitbook/1.gif')} alt="" /><figcaption><p>Перемещение группы объектов</p></figcaption></figure>

<img src={useBaseUrl('/img/gitbook/3 (1) (1) (1).png')} alt="" data-size="line" /> - желтые точки, расположенные в диагонально противоположных углах, позволяют сжимать и растягивать предмет по горизонтали и вертикали соответственно. Также через эти точки можно отражать объект, если перенести их на противоположную от них сторону.

<figure><img src={useBaseUrl('/img/gitbook/7.gif')} alt="" /><figcaption><p>Растягивание и сжимание объекта</p></figcaption></figure>

<img src={useBaseUrl('/img/gitbook/5 (1) (1) (1).png')} alt="" data-size="line" /> - синяя точка позволяет вращать предмет вокруг зелёной точки без изменения размера объекта.

<figure><img src={useBaseUrl('/img/gitbook/2.gif')} alt="" /><figcaption><p>Поворот объекта</p></figcaption></figure>

<img src={useBaseUrl('/img/gitbook/2 (1) (1) (1) (1).png')} alt="" data-size="line" /> - коричневая точка позволяет увеличивать или уменьшать размер обектов без потери их пропорций. Увеличение производится относительно зелёной точки.

<figure><img src={useBaseUrl('/img/gitbook/3.gif')} alt="" /><figcaption><p>Масштабирование объекта</p></figcaption></figure>

<img src={useBaseUrl('/img/gitbook/6 (1) (1).png')} alt="" data-size="line" /> - красная точка позволяет делать наклон/скос объекту.

<figure><img src={useBaseUrl('/img/gitbook/5.gif')} alt="" /><figcaption><p>Наклон объекта</p></figcaption></figure>

<img src={useBaseUrl('/img/gitbook/7 (1).png')} alt="" data-size="line" /> - прозрачная серая точка позволяет без влияния на объект сместить зелёную точку, а соответсвенно и все остальные точки вершин. Используется для точного позиционирования центра объекта.

<figure><img src={useBaseUrl('/img/gitbook/6.gif')} alt="" /><figcaption><p>Перемещение центра объекта</p></figcaption></figure>

**Контрольные точки слоев у группы**

Каждая контрольная точка имеет свою функцию и отличается по цвету.

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_2zPwZ-IBjfFpc3Fk15GGqt0Z86-ODh4ht15XLxtV0YUML7BVD70bB_F-TWZBJlPyoRC4sXmvg2VpEXtGrtDNgwnnABIOA_R9u-4tzxbI_GiD5_ISdsgbR35XdNqO9O7e7cJMSfIsg1bk7hoxEN-BQdo_0e553ca24fa6.png')} alt="" data-size="line" />-эта точка позиции, которая отвечает за расположение объекта на рабочей области. По сути, это центр объекта вокруг которого происходят изменения.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_tmPCiXPGUhDWAI-YjzEDZqlmvbNpAnC4Tn4436M-TxcIDi5HCf5JuoHQBFHutGLrqgNDGUI_IupGUQjkOh8xEWNhwMcxXBwV-Y6dW4DM3eNdxW0aJ60XJfZp0mjkt3SR-NE46I-fZ4ecRaw6P4DbKSQ_19b20278107b.gif')} alt="" /><figcaption></figcaption></figure>

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0G-niGSPOhI7SaKWPk2P1E2PzP6H-EEf_v-XqCvi6v7S4Fk23QjvOX2doaZaQJoyWva_7nRGJ4XXhfnW-BaXvVfm4oLsNiiR4xVTVvMiIHfHVuOhxRLUKpov8L0VoeIE8FmunwWnXZl9wOtXNP4UavM_62bd72088422.png')} alt="" data-size="line" />- эта точка вершин, которая отвечает за расположение вершин на рабочей области. С помощью этой точки можно менять размеры и форму объекта.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_ksKog1AkJhd9I8qeDDFZyygBo3DUXEODpQp7qgxKP86CfoDfXnXTZVbgTVvLRCK-HT7h4n9Qh34uztTyey_vsBDkaB6lUw0Dmzz69X3mvDSFVpstinp6LWiP1VvCgvQytRafLA4i1DGc98P63PSVdZY_24360cdbe33f.gif')} alt="" /><figcaption></figcaption></figure>

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_syyBU59nn0Xu8Hu4Z8c_u6LtfY6tSarLN61XM7GgH_WMTCWvAH6RYQstcLHaayNHOVbPn3rZpLkShBuDQl1ESn6uS-sz4pYdA-wqIlyD2e4sVrYxVNki0tmxuCprXqc5oYD69JUXVq4C4OIhRs9r1D8_568918ec83df.png')} alt="" data-size="line" />- эта точка отвечает за касательные, с ее помощью можно менять стороны объектов.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_sKLr2VN3vvpaLzPL2JDwg7rDPvgCS-KAhwwLf8e3ikVBckxREZMOcT4BIaRpljLonD0rHTK2pI02h50vr9ywBsoSBqtj1VJUhz3QdLWxuMoXoW-ijCI2aRT1EUXzDQKWlNp4DMxgk1-SV8w6IiU9cDk_9540606c4a85.gif')} alt="" /><figcaption></figcaption></figure>

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_459Tnxtx40pIEcwFWJKepHFdO8ux_pRBLaC5NU4B6tEEGpZUITQrtk7Tpnh2eEEpnunaHOJuWFNGE-wu8b5lcOAT70RpDe88KyPTyShqyJ8o1mr777dPnyNzNhrDPFrxqaBvd1ioeazJJYdD52tGkdU_0914c6b437cd.png')} alt="" data-size="line" />- эта точка углов. С ее помощью мы можем менять наклон объекта и вращать его вокруг центральной точки.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_BrA6JI5zDQm4wewgYEZ7waEzRaHpn2GN2HigMxV1p5LOX3uqXxpfz9g8v-ew2bHZSnQiRqVqIT09T9TE6AhwUq-5XONyA03vdD-iAvmIQIbpkdhw-BNjm4wpHL0pClBrxOmoZLfqJsVUnvlVDCIu_YU_22aa57a0f423.gif')} alt="" /><figcaption></figcaption></figure>

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_9uTvsJNhO71OmBeGfgJVER78-Jvk4bet7ss6Zw1ffFZ_VQxMw0Kn85AiKLDU_2N0vWgssFd9wWHyPIvlqye-5OW3tbvdM120wCxQxpjf4CiEqniWfKfQRokyGArIYG2ITjU7AX0m7-kYWq5fL_V5n1E_dc2b0ee2ae5b.png')} alt="" data-size="line" />- эта точка перемещает зелёную точку, а именно центр объекта.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_DuubLPtPNcOu6j-Ne9hLGALu9xTSRcUCOSdZppktaYk21S4ZxGEYGhhAsIhKiLPMXenz023Mm6vmaObFVFwJ8LgxE_R_Uvm4Hwaniu-ZzKEa9NY6ocULotkgKDrwO_D0NTil4iINV9D2z3BkShHk9_4_a14f0c86fbb2.gif')} alt="" /><figcaption></figcaption></figure>

<img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_5vCiGgKsdCcmg7hVBQTSC0qzlHycZf-xVMHiv06EHss1Zcg0k60u0Axc-Ka2NryvBS-Og8tZx15-cuC1xdPk413jEDvLVNMK1TSLLRARBbQg2bRN1U5N1tGo9RzIinLdTYDTtQb4KetsNieKQDgMUy0_94b91339fd85.png')} alt="" data-size="line" />- эта точка позволяет делать скос объекту.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_8wlEMsDcoTGepKnY_nKChZvPeC3Gg92K1P3oHZJHfLfaDNCxpKEI1FqfB-3UXYqWHzwflJuet1L07BLqCQd1sI2nElDBRKG9T7GvoKi5gZfcVmHXLkTvRkvero4FZeFJ3s2qGvxZdOxCjE_ZZtNoRaY_2edefac492d4.gif')} alt="" /><figcaption></figcaption></figure>

Пример

Мы создали круг, но его можно только тянуть за две точки, это менять радиус и перемещать, но мы хотим этот круг превратить в овал или ещё как-нибудь его видоизменить, для этого мы просто нажимаем на Группу слой. Теперь у нашего круга появилось больше возможностей такие как: точки позиции, вершины, касательные и углов

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_p3XwxihIgpv1Q3pdaZ0NpkJkdtcWSOWI30TTpVPfngwaOx-p5CE-fCaVQwx2jclWHdxDaqrJQB1jR-2_mtFSUKe36JsVIsKdLNyiPOlTl3FLGTuAR6kqB-oVQChXwPdkoVYFDBmpa5q7z29UHGUTHWc_68370f211c96.png')} alt="" width="563" /><figcaption><p>Вне группы</p></figcaption></figure>

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_eW9M56YyFVp8dWyWbOYiCB-tmBz3e0hGyHe4REKCM7UDC-DXOuz0Sep_5G3E6M4Qdt4eGhuGyxNJ-6khWMo16mMnsYLBvGx4FvS_r0N1CQEWu2vntV6DACX6ToNl2cD1f_2IT29pKGFqIhHjlEonV6g_9a691ffc3c2f.png')} alt="" width="563" /><figcaption><p>В группе</p></figcaption></figure>

**Как добавлять слои в группу**

Для того чтобы добавить новый объект в группу, есть два способа:

* Перетаскивание
* Копировать/вставить

**Перетаскивание**

При этом способе вы щелкаете на объект и с помощью ЛКМ удерживаете, и уже перетаскиваете в группу.

**Копировать/вставить**

При этом способе мы используем сочетание клавиш “CTRL+C” - копировать и “CTRL+V” - вставить, нажимая на сам объект который хотим скопировать и на саму группу в которой мы уже вставляем.

**Удаление слоя**

![](/assets/lh7-us.googleusercontent.com_jnRFzCnSceLYZHXXM48ObbQ9mbqBDZugiEkDd0QKLrqPlnSX9u23U7ay3jLjg3I5lx7RBKlqtP-Vd2Zq6MovQFEPU4-3qqqXXyiUos5hQCwBscwx40jPyscG2e2oDuq29ECq4rw7KcJKO9Z5r9Qaecc_f96548f90dc2.png) - Для того чтобы удалить слой из группы, нужно выделить слой и нажать на иконку мусорного бака в нижней панели слоев

**Вынесение слоя за группу**

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_ISn2hl2PtjGs1EfiSrF3gkqUOsBUHZZb03yXdQbTNAPl3qM_gYiFLLcBawPBoVEq7Tuvs3NIoQq9RvJOKLMCp2v8VuUU1jM9C5Hahh9z_BTRnZD-0CImoxpdP8f-wab2tzOWZ0ntqW1qPuIuYPD3LYk_d4ab428cc2be.gif')} alt="" /><figcaption></figcaption></figure>

Но если вы уже в группе как-то изменяли объект, то при перетаскивание этого объекта (из группы), объект будет в прежнем состоянии в котором он изначально был.