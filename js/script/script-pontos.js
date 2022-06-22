let ele = document.getElementById('pontos')
                const hei = ele.clientHeight
                const wid = ele.clientWidth

                ele.addEventListener('mousemove', handleMove)

                function handleMove(e) {
                
                const xVal = e.layerX
                const yVal = e.layerY
                
                const yRotation = 20 * ((xVal - wid / 2) / wid)
                
                const xRotation = -20 * ((yVal - hei / 2) / hei)
                
                const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
                
                ele.style.transform = string
                }

                ele.addEventListener('mouseout', function() {
                ele.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
                })

                ele.addEventListener('mousedown', function() {
                ele.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
                })

                ele.addEventListener('mouseup', function() {
                ele.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
                })