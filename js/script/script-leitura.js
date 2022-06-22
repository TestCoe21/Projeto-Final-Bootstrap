let eleme = document.getElementById('leitura')
                const heigh = eleme.clientHeight
                const widt = eleme.clientWidth

                eleme.addEventListener('mousemove', handleMove)

                function handleMove(e) {
                
                const xVal = e.layerX
                const yVal = e.layerY
                
                const yRotation = 20 * ((xVal - widt / 2) / widt)
                
                const xRotation = -20 * ((yVal - heigh / 2) / heigh)
                
                const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
                
                eleme.style.transform = string
                }

                eleme.addEventListener('mouseout', function() {
                eleme.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
                })

                eleme.addEventListener('mousedown', function() {
                eleme.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
                })

                eleme.addEventListener('mouseup', function() {
                eleme.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
                })