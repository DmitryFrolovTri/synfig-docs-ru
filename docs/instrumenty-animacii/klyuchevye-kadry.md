import useBaseUrl from '@docusaurus/useBaseUrl';

# Ключевые кадры

## Ключевые кадры <a href="#docs-internal-guid-d3661bfb-7fff-0488-762b-15bbbc6e565b" id="docs-internal-guid-d3661bfb-7fff-0488-762b-15bbbc6e565b"></a>

Ключевой кадр - это временная метка, фиксирующая состояние анимации в конкретный момент. Он служит основой для построения траекторий и хранения информации о параметрах каждого слоя.

Особенности:

* Связь с кадром: Каждый ключевой кадр привязан к определенному кадру анимации, при этом один кадр может содержать только один ключевой кадр.
* Специальный кадр: Хранит детальную информацию о параметрах каждого слоя, делая его доступным для повторного использования.

### Внешний вид ключевого кадра

Ключевой кадр выглядит как треугольник вершиной направленный вниз, а под ним на панели времени расположена светло-коричневая вертикальная пунктирная линия. Эта линия отличается  от бегунок времени по цвету (курсор времени синий).

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_4kzrG7WQJZBJb7z6mLSsPzEHsY_KEwy_e5i7BrZrc5-b08EpdaZZ9a1OmRyMIY17w7_0OysGNJ4j4hel7iUrINnMLhy9pCb1lFAmHpdDorwnetXEPeFy4wPpQDaOLTh5FoYpwVhpEEObS-1k07PdRU_19bf5f450a04.png')} alt="" /><figcaption></figcaption></figure>

### Создание ключевого кадра

Для того, чтобы создать ключевой кадр, вам нужно поставить бегунок времени на нужный кадр, затем навести курсор мыши на полосу над шкалой времени и щелкнуть ЛКМ, после чего стоит выбрать из списка “Создать ключевой кадр”.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_LbFv3QaGY2gUU2bjGQCL9O4KcUfIMp7NliUZWR5PMLciLf7j11YxNiHH7pPJgnJVX-rE75ksmKQwHLkmk6D8F9PzHGfTm8YAFNirpkJPQDN2rLMsTVxDyFghcdOYDL1AuXkEXuVcJWc2GvrR9j90cPY_142063b319bb.gif')} alt="" /><figcaption></figcaption></figure>

Отображение ключевых кадров на временной шкале могут представать в трех видах: “Обычный”, “Выбранный”, “Неактивный”.\


<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_fRMfE5GrD2dqyCxXMjCEZ3HWSnOy4XkHuA9tDj-xnPybkVkPlxWX4bQ1GLvjhZRL-70f6qAUMD914DExA8ofBOky8W2CLfcn3JlUxCYDm_vmdrHL7-CskeTgsbwwdFEZUa-EVv5FtsTdHe5YVQETxY8_d962f31b5b4b.png')} alt="" /><figcaption></figcaption></figure>

### Неактивный ключевой кадр

Вы можете активировать или отключить ключевой кадр. Для этого выделите ключевой кадр, затем щелкнув ПКМ выберите из списка “Свойства ключевого кадра”, после этого следует снять или поставить галочку напротив строки “Действующий”. Это действие позволяет игнорировать ключевые кадры во время создания анимации при его отключении.

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_PPjSeQtfskC36VR53D5X4RiPpSGZXant53rnfsRUI1_i7l6K2HdMHihKnLHKQYEj1rEYdymG6zTvScXWOrjDdakzIeVJz8H5VFq4tC5FCu2q46ejU2FYTo6CwSLmc7VCmCOkyHsUHqyaUFsY9q1gDl8_e0fb2cbf372f.png')} alt="" /><figcaption></figcaption></figure>

### Работа ключевого кадра

Ключевые кадры дают большие возможности в сфере анимации, но мы выделим 2 основные функции:

* Запоминание изначальных позиций и автоматическое создание фиксаторов

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_0QTiE78tPXC_EpQ6vJIiS1ohzenTx2H-p6bWLdAi45M2kTUNckd-jNI7Fvjoer_K51fV5IVoXDKCeB1E8lqQ_g-HFvtiKfFntWp_N4b4gjex99gvP8-urk30BNrpJZyqp51bfiki4t5EoGszwY5J3A_e59a9dd10dd5.gif')} alt="" /><figcaption></figcaption></figure>

* Равномерное растягивание фиксаторов между ключевыми кадрами

<figure><img src={useBaseUrl('/assets/lh7-us.googleusercontent.com_gw-cW-EE_wyn0obPn9BTKryTZe6aT3L23q1s8bAswItfgOGlIJ6QUj2G77IK2ZloDbmwLdzEVSLu9dJmexZ3w6R3MmYXeYlip9ZrK8QZwdHa9CBj_HonsspgMM68Dw91gZRqdn_KTv-aqJJymMYSW90_0d6a832431f8.gif')} alt="" /><figcaption></figcaption></figure>

### Управление ключевыми кадрами

Помимо создания ключевого кадра, вы так же можете управлять им м вносить некоторые изменения с помощью всплывающего меню, которое появляется, при щелчке ПКМ на ключевой кадр.![](/assets/lh7-us.googleusercontent.com_2UkuvBdhr70JV-5GI55dWuLUUfRsR-EnPXH0LiKo0TgBNHkGnnlI1msZYSQDS2JcPKQYLLCUv7ZoSmYA4-fo3SP1iNl45zcZqlhD-CSh-RynS8p5fn2PxLEXb13t3PWfZY09JM5jrGiQkxzY65Ko0bA_31172dbbb237.png)\
На рисунке выше вы можете заметить, что первые 2 панели неактивны, это связано с тем, что бегунок времени стоит на том же кадре, где уже создан ключевой кадр. Чтобы воспользоваться первыми двумя функциями, перенесите бегунок времени на нужный вам кадр.

### Удаление ключевого кадра

Удалить ключевой кадр можно через 2 панели : панель “Шкалы времени” и панель “Ключевые кадры”.

![](/assets/lh7-us.googleusercontent.com_HexauKPQXBZJzAwxfWQF8ZVc7ZKzfcwUK-S7U34bjbNc33TidUzS7lOB_4nHhdh3EDfsiFEmLbM1t3UfnHvblq47vFlqOqLMbFHAbKEawYhSQ3qws3bjo-j64IPJmjEJPVjYY0RNk1L-WugepViVsA_4e3b69c857bd.png)![](/assets/lh7-us.googleusercontent.com_mxI2lQYA9aBkLg7I3IKLHiARoYKFCY6V3cemqE-aTQfNrfCbAUgwLFydIQBsYmwJFvM2aOkADBeeVZzc83l_iW8WmK_WExBlMGtOOMFk27K2aEKbeQC-lI1eD08y5i-HFNDX2-rpjki2_r6NoUW0KwM_e069321e19a0.png)\
Щелкните ПКМ на ключевой кадр, который хотите удалить и выберите из меню “Удалить ключевой кадр”

И ещё один важный момент: когда мы удаляем ключевой кадр, то вместе с ним будут удалены все фиксаторы, которые ему принадлежат.

### Свойства ключевого кадра

Чтобы вызвать окно со свойствами ключевого кадра, следует щелкнуть ПКМ на ключевой кадр и из всплывшего списка выбрать “Свойства ключевого кадра”. После этого перед вами откроется окно.\
![](/assets/lh7-us.googleusercontent.com_0BymyjadWZHg-YIxo9SFVjH2bHSasx0woHzebJVrLqOP3B1u_E0CTeWlc5dswRlDmNoCwQngmllBo7L9N5lEYoRcuCPbqd5sbkJP3SmL4A_yyO2Bc6rtPF4rihNTfIKLe_MCBxQIjOxV4iRV0tEoqLQ_8049534413e7.png)\
В этом окне есть следующие параметры, которые вы можете редактировать:

* Описание: Предназначено для вашего текста, который будет отображаться при наведении курсора мыши на названный ключевой кадр.
* Действующий: См. подробнее “Неактивный ключевой кадр”
* Вход: Позволяет настроить вход интерполяции для всех фиксаторов, что находятся на ключевом кадр
* Выход: Позволяет настроить выход интерполяции для всех фиксаторов, что находятся на ключевом кадр (см. подробнее“Интерполяция” в разделе “Фиксаторы”)
* Натяжение: см. подробнее “Интерполяция ТСВ” в разделе “Фиксаторы”.
* Отклонение: см. подробнее “Интерполяция ТСВ” в разделе “Фиксаторы”.
* Непрерывность: см. подробнее “Интерполяция ТСВ” в разделе “Фиксаторы”.
* Временное натяжение: см. подробнее “Интерполяция ТСВ” в разделе “Фиксаторы”.

### Панель “Ключевые кадры”

На панели “ключевые кадры”  хранится список всех ключевых кадров. Здесь вы можете задавать имена для них, а также быстро переходить от одного ключевого кадра к другому. Для этого достаточно щёлкнуть по надписи "перейти"&#x20;

![](/assets/lh7-us.googleusercontent.com_HlfvKDBUEDPw-LfPDimKYC1uXuylps5xzUs9oj7sYofI1b2Uay-5rQLh01GOjOpiKB2QEFcUvUOryeaHzg0u6kkC7DU8kKhw98WnfLHuLSY4S0pt7AkXHKqq1AUYBqmA68G_VCxnAXXtAB0SoaIAXc0_43fa963d4fa4.gif)

\
\