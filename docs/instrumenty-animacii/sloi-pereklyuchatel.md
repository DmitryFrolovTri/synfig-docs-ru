import useBaseUrl from '@docusaurus/useBaseUrl';

# Слой-переключатель

**Слой-переключатель** - это специальный тип слоя, предназначенный для группировки множества других слоев. Особенность слоя-переключателя заключается в том, что он одновременно отображает только один из вложенных слоев.

<figure><img src={useBaseUrl('/img/gitbook/2024-04-17_13-14_1.png')} alt="" /><figcaption><p>Слой-переключатель</p></figcaption></figure>

Чтобы поместить слои в слой-переключатель, нужно выделить все необходимые слои на панели слоёв, нажать правой кнопкой мыши на любом из них и из появившегося окна выбрать "сгруппировать слои в переключатель".

<figure><img src={useBaseUrl('/img/gitbook/howtoswitch.png')} alt="" /><figcaption><p>Группировка слоёв в слой-переключатель</p></figcaption></figure>

Также можно создать переключатель с помощью кнопки "создать слой" внизу панели слоёв. Нажимаем на крест, из появившегося меню выбираем "другое" и "переключатель". Далее перемещаем необходимые слои в переключатель как в обычную группу.

<figure><img src={useBaseUrl('/img/gitbook/switcher7.gif')} alt="" /><figcaption><p>Группировка слоёв в слой-переключатель</p></figcaption></figure>

У этой группы есть специальный параметр «Имя активного слоя» - он указывает какой именно слой отображается на рабочей области.

<figure><img src={useBaseUrl('/img/gitbook/switcher.gif')} alt="" /><figcaption><p>Переключение слоёв</p></figcaption></figure>

Если мы будем изменять этот параметр в режиме анимации, то у нас будут появляться фиксаторы и слои будут переключаться.

<figure><img src={useBaseUrl('/img/gitbook/switcher2.gif')} alt="" /><figcaption><p>Анимирование переключения слоёв</p></figcaption></figure>

### Применение

Слои-переключатели применяются для управления видимостью взаимоисключающих элементов анимации или сцены. Варианты использования:

* Переключение между различными частями персонажа (разные выражения лица, варианты позиций рук, ног и др.);

<figure><img src={useBaseUrl('/img/gitbook/AIMrSGuo6Tk.jpg')} alt="" /><figcaption><p>Разворот персонажа</p></figcaption></figure>

<figure><img src={useBaseUrl('/img/gitbook/switcher3.gif')} alt="" /><figcaption><p>Анимированый разворот персонажа с помощью слоя-переключателя</p></figcaption></figure>

* Липсинк (переключение между фонемами - разными позициями рта);

<figure><img src={useBaseUrl('/img/gitbook/switcher4.gif')} alt="" /><figcaption><p>Липсинк с помощью слоя-переключателя</p></figcaption></figure>

* Использование последовательности кадров (покадровая анимация, png-секвенции). При импорте в synfig, последовательность кадров автоматически сохраняется в слой-переключатель.

<figure><img src={useBaseUrl('/img/gitbook/importseq.png')} alt="" /><figcaption><p>Ипортирование последовательности</p></figcaption></figure>

<figure><img src={useBaseUrl('/img/gitbook/importseq2.png')} alt="" /><figcaption><p>Ипортирование последовательности</p></figcaption></figure>

<figure><img src={useBaseUrl('/img/gitbook/switcher5.gif')} alt="" /><figcaption><p>Ипортирование последовательности</p></figcaption></figure>
