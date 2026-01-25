import useBaseUrl from '@docusaurus/useBaseUrl';

# Экспорт изображений

&#x20;![](/assets/lh7-us.googleusercontent.com_kTYwUraBI8kj83clUgg4txHVOE4VlGyw-atST0FX-Cj5l7O8rx-KkSjCknBXDK47npWARZSGnGXpZ_hX-laSjv3nqKe93JmcShDeaC1B6mINF-qQMlezAxMKYprq8e4vvK15wNE8uh4jmXPnJe74LoU_d5f122705a12.png)— Чтобы запустить рендеринг, нужно щекнуть на кнопку “вызова диалогового окна параметров визуализации”.

После чего откроется диалог "параметры визуализации".

**Одна картинка**

Предположим теперь мы хотим отрендерить один текущий кадр как изображение в формате png. Для этого меняем разрешение на "png", затем выбираем модуль вывода "Автоматически". Далее ставим галочку "Рендерить только текущий кадр". Смотрим результат.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_d37he1ujA8IND-BK5Pxtpg4AezYW2R3KbRntskrUurNzT1_bjl1pVR8SlQRnKe3t4aUGAML7cL4BCPAj-iKGhqDqcrPIbR_lxUIkLPfcFea3avbJG_aoEzMGv1xk3yxYatuIWufWfJDeSwfHKLqU-hM_0120cae3ff60.png')} alt="" /><figcaption><p>Параметры визуализации</p></figcaption></figure>

**Рендеринг PNG-секвенций**

Для того, чтобы сохранить прозрачный фон при экспорте  изображений. Это позволяет совмещать вашу анимацию с другими видеоклипами и эффектами в программах видеомонтажа и композинга.

В этом случае рендеринг выполняется как последовательность изображений в формате png. В этом режиме также используется сжатие без потери качества, поэтому это хороший вариант, если ваша программа для монтажа не поддерживает формат H264, который мы рассмотрели в разделе “Экспорт видео”&#x20;

Все настройки остаются такими же, как при визуализации одного кадра, за исключением строки "Рендерить только текущий кадр", здесь следует убрать галочку. Далее выбирете "Визуализация" и подождитет, когда программа закончит визуализацию.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_uBv7VOTh9mhVGn0neXE1u5nGXvcKDnwrLfVzoVVYYwaaNOh2_SwO7wFKYUbIV4ORTrftmJNAHlnJcyiltnKhQXlDXr3W4LZxFMfp9Ho7R9JDmql8C1n_QFSU0Z9-jfxAZggjb-oUYFcJWvuAWy-zc2o_b5ac616e4f44.png')} alt="" /><figcaption><p>Экспорт секвенций</p></figcaption></figure>

Теперь секвенцию можно вставлять в другую программу.