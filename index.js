        const colorChanger = document.getElementById('colorChanger');    
        const colorClasses = [
          'divider-primary', 'divider-secondary',
          'divider-accent', 'divider-success', 'divider-warning',
          'divider-info', 'divider-error'
        ];
    
        function getRandomCustomColor() {
          const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
          return randomColor;
        }
    
        function changeColor() {
          colorChanger.classList.remove(...colorClasses);

          const randomColorClass = getRandomCustomColor();

          colorChanger.classList.add(randomColorClass);
        }

        setInterval(changeColor, 1000);
