let elem = document.getElementById('loja')
                const heig = elem.clientHeight
                const wi = elem.clientWidth

                elem.addEventListener('mousemove', handleMove)

                function handleMove(e) {
                
                const xVal = e.layerX
                const yVal = e.layerY
                
                const yRotation = 20 * ((xVal - wi / 2) / wi)
                
                const xRotation = -20 * ((yVal - heig / 2) / heig)
                
                const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
                
                elem.style.transform = string
                }

                elem.addEventListener('mouseout', function() {
                elem.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
                })

                elem.addEventListener('mousedown', function() {
                elem.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
                })

                elem.addEventListener('mouseup', function() {
                elem.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
                })