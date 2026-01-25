import useBaseUrl from '@docusaurus/useBaseUrl';

# Сферизация

Слой "Сферизация" искажает объект по сфере.&#x20;

Параметры слоя сферизация:

* Радиус - определяет размер сферического искажения;
* Величина - сила искажения (отрицательные значения инвертируют эффект);
* Обрезка - если опция включена, то область вне радиуса не искажается;
* Тип искажения - определяет направление искажения (по сфере, по вертикали, по горизонтали).

| Параметры                                                                | Результат                                                                         |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Слой "сферизация" выключен                                               | <p></p><p><img src={useBaseUrl('/img/gitbook/glaz.gif')} alt="" data-size="original" /></p> |
| <img src={useBaseUrl('/img/gitbook/sph.png')} alt="" data-size="original" />       | <img src={useBaseUrl('/img/gitbook/glaz2.gif')} alt="" data-size="original" />              |
| <img src={useBaseUrl('/img/gitbook/spherever.png')} alt="" data-size="original" /> | <img src={useBaseUrl('/img/gitbook/glaz3.gif')} alt="" data-size="original" />              |
| <img src={useBaseUrl('/img/gitbook/spherehor.png')} alt="" data-size="original" /> | <img src={useBaseUrl('/img/gitbook/glaz4.gif')} alt="" data-size="original" />              |

В таблице ниже представлена работа фильтра при различных параметрах.&#x20;

| Тип искажения/Величина | 1                                                                         | -1                                                                         |
| ---------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Сферизация выключена   | <img src={useBaseUrl('/img/gitbook/33333.png')} alt="" data-size="original" />      |                                                                            |
| Сферизация             | <img src={useBaseUrl('/img/gitbook/sph1px-img.png')} alt="" data-size="original" /> | <img src={useBaseUrl('/img/gitbook/sph-1px-img.png')} alt="" data-size="original" /> |
| Вертикальная черта     | <img src={useBaseUrl('/img/gitbook/vert1px.png')} alt="" data-size="original" />    | <img src={useBaseUrl('/img/gitbook/vert-1px.png')} alt="" data-size="original" />    |
| Горизонтальная черта   | <img src={useBaseUrl('/img/gitbook/hor1pximg.png')} alt="" data-size="original" />  | <img src={useBaseUrl('/img/gitbook/hor-1pximg.png')} alt="" data-size="original" />  |