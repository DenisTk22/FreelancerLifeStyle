## FLEXBOX
> **display: flex;** - выстраивает в ряд flex элементы. При изменении размера flex-элементы не будут переноситься на следующую строку. Flex элементы входят в блочный flex-контейнер, который занимает всю ширину экрана.
- |[XXX     ]|, где | границы экрана |, [размер flex-контейнера], X - flex-элемент
    - /* выравнивание flex-элементов по горизонтали */
        - **justify-content: flex-start;** значение по умолчанию, все flex-элементы располагаются в начале flex-контейнера (слева)
            - |[XXX      ]|
        - **justify-content: flex-end;** все flex-элементы располагаются в конце flex-контейнера (справа)
            - |[      XXX]|
        - **justify-content: center;** все flex-элементы располагаются по центру flex-контейнера
            - |[   XXX   ]|
        - **justify-content: space-between;** - создает равное пространство между flex-элементами, при изменении ширины экрана пространство между flex-элементами изменится
            - |[X   X   X]|
        - **justify-content: space-around;** - добавляет простанство у всех flex-элементами, при изменении ширины экрана пространство между flex-элементами изменится
            - |[ X  X  X ]|
    - /* выравнивание flex-элементов по вертикали */
        - **align-items: stretch;** значение по умолчанию, границы всех flex-элементов будут растянуты по элементу с самым большим содержанием:
            - |[{xx} {xxxx} {xxx}      ]|
            - |[{  } {xxxx} {   }      ]|, где {границы flex-элементов}
        - **align-items: flex-start;** отменить растянутость границ flex-элементов, границы будут по содержанию и прижаты к верху flex-контейнера:
            - |[{xx} {xxxx} {xxx}      ]|
            - |[     {xxxx}            ]|, где {границы flex-элементов}
        - **align-items: flex-end;** отменить растянутость границ flex-элементов, границы будут по содержанию и прижаты к низу flex-контейнера:
            - |[     {xxxx}            ]|
            - |[{xx} {xxxx} {xxx}      ]|, где {границы flex-элементов} 
        - **align-items: flex-center;** отменить растянутость границ flex-элементов, границы будут по содержанию и по центру flex-контейнера:
            - |[     {xxxx}            ]|
            - |[{xx} {xxxx} {xxx}      ]|
            - |[     {xxxx}            ]|
        - **align-items: baseline;** flex-элементы выстраиваются по базовой линии flex-контейнера (не задается):
            - |[     {xxxx}            ]|
            - |[{xx} {xxxx} {xxx}      ]| - базовая линия
            - |[     {xxxx}            ]|
    - /* другие свойства flex-элементов */     
        - **flex-wrap: nowrap;** - значение по умолчанию, при изменении размера экрана flex-элементы не будут переноситься на следующую строку.
        - **flex-wrap: wrap;** - при изменении размера экрана flex-элементы будут переноситься на следующую строку.
        - **flex-wrap: wrap-reverse;** - при изменении размера экрана flex-элементы будут переноситься на следующую строку, но задом наперед.

    - **display: inline-flex;** - строчный flex-контейнер, контейнер будет занимать только то место, которое занимают его элементы:
        - |[XXX]     |, где | границы экрана |, [размер flex-контейнера], X - flex-элемент
        - text-align: center; - flex-элементы выстроются по центру