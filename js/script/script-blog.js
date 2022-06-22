let element2 = document.getElementById('blog')
                const height4 = element2.clientHeight
                const width4 = element2.clientWidth

                element2.addEventListener('mousemove', handleMove)

                function handleMove(e) {
                
                const xVal = e.layerX
                const yVal = e.layerY
                
                const yRotation = 20 * ((xVal - width4 / 2) / width4)
                
                const xRotation = -20 * ((yVal - height4 / 2) / height4)
                
                const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
                
                element2.style.transform = string
                }

                element2.addEventListener('mouseout', function() {
                element2.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
                })

                element2.addEventListener('mousedown', function() {
                element2.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
                })

                element2.addEventListener('mouseup', function() {
                element2.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
                })