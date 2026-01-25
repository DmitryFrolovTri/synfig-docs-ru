import useBaseUrl from '@docusaurus/useBaseUrl';

# Размывание движением

<figure><img src={useBaseUrl('/img/gitbook/21.gif')} alt="" /><figcaption><p>Размывание движением</p></figcaption></figure>

<img src={useBaseUrl('/img/gitbook/layer_blur_motion_icon (1).png')} alt="" data-size="line" /> - Размывание движением - слой фильтр, который позволяет имитировать размытие, возникающее при движении объекта.&#x20;

:::info
На рис. 1 представлен пример работы фильтра "Размывание движением" в комбинации с [анимацией вдоль кривой](../instrumenty-animacii/animaciya-vdol-krivoi).
:::

Размытие - это графический эффект, имитирующий изображение вне фокуса.

В фотографии размытие может возникнуть, когда точка фокусировки объектива не совпадает с объектом съемки. Существуют и другие причины размытия:

* **Неправильная экспозиция:** Длительная выдержка при движении объекта или камеры может привести к размытию.
* **Широкая диафрагма:** При использовании очень широкой диафрагмы (f4) объекты вне зоны фокуса будут размыты сильнее, чем при полностью закрытой диафрагме (f22).

В графическом дизайне фильтры размытия имитируют эти эффекты с большей или меньшей степенью реалистичности.

## Параметры слоя "Размывание движением"

### Апертура

Параметр «Апертура» указывает на количество кадров, используемых для расчета эффекта движения. Концепция аналогична выдержке или времени экспозиции в фотографии. Чем больше значение апертуры, тем большее количество кадров учитывается при размытии, тем сильнее будет эффект размытия.

<figure><img src={useBaseUrl('/img/gitbook/apertuta1.gif')} alt="" /><figcaption><p>Размывание движением, параметр "апертура"</p></figcaption></figure>

### Коэффициент подвыборки

Параметр «коэффициент подвыборки» влияет на количество вычисляемых подсэмплов. Использование высокого значения приводит к более тонкому размытию, но при этом рендеринг занимает больше времени из-за большого объема вычислений.

<figure><img src={useBaseUrl('/img/gitbook/koef.gif')} alt="" /><figcaption><p>Размывание движением, параметр "коэффициент подвыборки"</p></figcaption></figure>

### Тип субдискретизации

Параметр «Тип субдискретизации» определяет используемый метод субдискретизации:

* **Постоянный:** Размытие одинаково сильно на протяжении всей анимации.
* **Линейный:** Размытие постепенно нарастает от начального значения к конечному.
* **Гиперболический:** Размытие резко нарастает в начале и затем плавно увеличивается.

<figure><img src={useBaseUrl('/img/gitbook/typesub (2).gif')} alt="" /><figcaption><p>Размывание движением, параметр "тип субдискретизации"</p></figcaption></figure>

:::info
На гиф выше используются следующие настройки:



<img src={useBaseUrl('/img/gitbook/2024-04-24_13-59.png')} alt="" data-size="original" />
:::

### Стартовая сумма подвыборки (ССП)

Параметр «Стартовая сумма подвыборки» определяет силу размытия в первом кадре анимации. Значение **0** означает полное отсутствие размытия в начале. Значение **больше 0** задаёт начальную степень размытия. Чем выше значение, тем сильнее будет размыто изображение в первом кадре.

### Конечная сумма подвыборки (КСП)

Параметр «Конечное значение подсэмплинга» определяет силу размытия в последнем кадре анимации. Значение **0** означает полное отсутствие размытия в конце. Значение **больше 0** задаёт конечную степень размытия. Чем выше значение, тем более размытым будет изображение в финальном кадре.

<figure><img src={useBaseUrl('/img/gitbook/ssp-csp (1).gif')} alt="" /><figcaption><p>Размывание движением, параметры "Стартовой/конечной сумм подвыборки"</p></figcaption></figure>

**Ниже представлена таблица, которая демонстрирует работу слоя фильтра "Размывание движением".**&#x20;

В столбце слева обозначен параметр апертура: 0f-0f значит, что значение параметра апертура неизменно и равна 0, 0f-24f значит, что значение параметра анимировано и постепенно меняется с 0 до 24 и т.д..

В строке сверху обозначены значения стартовой и конечной сумм подвыборки.

Три звезды обозначают типы субдискретизации: сверху - "постоянная", по центру - "линейный", снизу - "Гиперболический".

<table><thead><tr><th width="119">Апертура</th><th width="316">ССП = 1, КСП = 0</th><th>ССП = 0, КСП = 1</th></tr></thead><tbody><tr><td>0f–0f</td><td><a href={useBaseUrl('/assets/wiki.synfig.org_File_Motion_blur_0-1_aperture_0-0f_34e2b81e70e0.gif')}><img src={useBaseUrl('/img/gitbook/00.gif')} alt="Motion blur 0-1 aperture 0-0f.gif" /></a></td><td><a href={useBaseUrl('/assets/wiki.synfig.org_File_Motion_blur_0-1_aperture_0-0f_34e2b81e70e0.gif')}><img src={useBaseUrl('/img/gitbook/00.gif')} alt="Motion blur 0-1 aperture 0-0f.gif" /></a></td></tr><tr><td>0f–24f</td><td><a href={useBaseUrl('/assets/wiki.synfig.org_File_Motion_blur_0-1_aperture_0-24f_b93bbe64055a.gif')}><img src={useBaseUrl('/img/gitbook/0-24 10.gif')} alt="Motion blur 0-1 aperture 0-24f.gif" /></a></td><td><a href={useBaseUrl('/assets/wiki.synfig.org_File_Motion_blur_1-0_aperture_0-24f_4d35f7d0e5f4.gif')}><img src={useBaseUrl('/img/gitbook/0-24 01.gif')} alt="Motion blur 1-0 aperture 0-24f.gif" /></a></td></tr><tr><td>24f–24f</td><td><a href={useBaseUrl('/assets/wiki.synfig.org_File_Motion_blur_0-1_aperture_24-24f_241e78ffcf4a.gif')}><img src={useBaseUrl('/img/gitbook/24-24 10.gif')} alt="Motion blur 0-1 aperture 24-24f.gif" /></a></td><td><a href={useBaseUrl('/assets/wiki.synfig.org_File_Motion_blur_1-0_aperture_24-24f_a049288b4018.gif')}><img src={useBaseUrl('/img/gitbook/24-24 01.gif')} alt="Motion blur 1-0 aperture 24-24f.gif" /></a></td></tr><tr><td>24f–0f</td><td><a href={useBaseUrl('/assets/wiki.synfig.org_File_Motion_blur_0-1_aperture_24-0f_c5079e859770.gif')}><img src={useBaseUrl('/img/gitbook/24-0 10.gif')} alt="Motion blur 0-1 aperture 24-0f.gif" /></a></td><td><a href={useBaseUrl('/assets/wiki.synfig.org_File_Motion_blur_1-0_aperture_24-0f_fa2df3921856.gif')}><img src={useBaseUrl('/img/gitbook/24-0 01.gif')} alt="Motion blur 1-0 aperture 24-0f.gif" /></a></td></tr></tbody></table>
