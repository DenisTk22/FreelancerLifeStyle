## Блочные и строчные теги в CSS

>**padding** - внутренний отступ в блочном теге (нет отрицательных значений)
- Используется в px, в % (от ширины экрана)
- Сокращение: p20 -> padding: 20px;
- padding: 10px 20px 30px 40px; 

        10px - отступ сверху, 20px - отступ справа, 30px - отступ снизу, 40px - отступ слева.
- padding: 10px 20px 30px; 

        10px - отступ сверху, 20px - отступ слева и справа, 30px - отступ снизу.
- padding: 10px 20px; 

        10px - отступ сверху и снизу, 20px - отступ слева и справа.
- padding: 10px; 

        10px - отступ со всех сторон.

>**margin** - внешний отступ в блочном теге (могут быть отрицательные значения)
- Используется в px, в % (от ширины экрана)
- Сокращение: m20 -> margin: 20px;
- margin: 10px 20px 30px 40px; *значения - аналог padding*
- margin: 10px -10px;

>**width** - ширина у блочного тега, а также у строчного тега img
- Используется в px, в % (от ширины экрана)
- Сокращение: w20 --tab-> padding: 20px;

>**max-width** - устанавливает максимальную ширину блочных тегов, а также у строчного тега img
- Используется в px, в % (от ширины экрана)
- Примечание: устанавливает max ширину, но не задает её. Если ширина родителя/ экрана будет уменьшаться, то ширина блока будет тоже уменьшаться

>**min-width** - устанавливает минимальную ширину блочных тегов, а также у строчного тега img
- Используется в px, в % (от ширины экрана)
- Примечание: устанавливает min ширину, но не задает её. Если ширина родителя/ экрана будет увеличиваться, то ширина блока будет тоже увеличиваться

>**height** - аналог width 

>**max-height** - аналог max-width. Строки могут налезать на текст из другого блока.

>**min-height** - аналог min-width.

>>- Расчет ширины и высоты блока - стандартный расчет: width и height задают ширину и высоту контента не включая в себя отступов полей и границ.
    Но со значением box-sizing: border-box, width и height включают в себя значение полей и границ, но не внешних отступов margin.
>>>- ***Пример1 (с box-sizing: border-box;):*** box-sizing: border-box; width 500px; padding 0 20 px; margin 0 10px; border: 1px; 
        ---> общая ширина блока width + левый margin + правый margin = 520px;
>>>- ***Пример2 (без box-sizing: border-box;):*** width 500px; padding 0 20 px; margin 0 10px; border: 1px; 
        ---> общая ширина блока width + левый padding + правый padding + левый margin + правый margin + border слева + border справа = 562px; 

>**overflow** - управляет отображением содержания блочного элемента.
- ***:visible;*** - при выпадении текста за границ блока, текст будет виден.
- ***:hidden;*** - при выпадении текста за границ блока, текст будет не виден.
- ***:scroll;*** - появится отображение скрола по высоте и ширине, вне зависимости от выхода текста за границы блока.
- ***:auto;*** - скрол появится только там где будет выход текста за пределы блока (по ширине и высоте).

>**display** - многоцелевое свойство, которое определяет , как элемент должен быть показан в документе.
- ***:block;*** - используется для строчных тегов, строчный тег будет в блочный.

        сокращение - db --tab-> display: block;
- ***:inline;*** - используется для блочных тегов, блочный тег будет строчным.

        сокращение - di --tab-> display: inline;
- ***:inline-block;*** - используется для строчных тего, тег размещается на экране как строчный - в одну строку и занимает шинирину контента, но на него действуют блочные отступы, ширина, высота.

        сокращение - dib --tab-> display: inline-block;
- ***:none;*** - скрывает элемент из документа, занимаемое им место не сохраняется (на него переходят видимые блоки). 

        сокращение - dn --tab-> display: none;
- ***есть еще свойства***