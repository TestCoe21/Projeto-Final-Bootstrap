let elemen = document.getElementById('fotos')
                const height2 = elemen.clientHeight
                const width2 = elemen.clientWidth

                elemen.addEventListener('mousemove', handleMove)

                function handleMove(e) {
                
                const xVal = e.layerX
                const yVal = e.layerY
                
                const yRotation = 20 * ((xVal - width2 / 2) / width2)
                
                const xRotation = -20 * ((yVal - height2 / 2) / height2)
                
                const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
                
                elemen.style.transform = string
                }

                elemen.addEventListener('mouseout', function() {
                elemen.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
                })

                elemen.addEventListener('mousedown', function() {
                elemen.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
                })

                elemen.addEventListener('mouseup', function() {
                elemen.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
                })