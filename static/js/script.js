document.addEventListener('mousemove', function (e) {
    const eyeball = document.getElementById('eyeball');
    const scaryface = document.getElementById('scaryface');
    
    const rect = scaryface.getBoundingClientRect();
    const faceX = rect.left;
    const faceY = rect.top;
    const faceWidth = rect.width;
    const faceHeight = rect.height;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const x = mouseX - faceX;
    const y = mouseY - faceY;

    const maxLeft = faceWidth - eyeball.width;
    const maxTop = faceHeight - eyeball.height;

    const left = Math.max(0, Math.min(x, maxLeft));
    const top = Math.max(0, Math.min(y, maxTop));

    eyeball.style.left = `${left}px`;
    eyeball.style.top = `${top}px`;
});

document.addEventListener("DOMContentLoaded", function() {
    //dont be afraid to asdd more tooltips here.
    const hoverSpots = document.querySelectorAll('.hover-spotbed');
    const hoverSpots2 = document.querySelectorAll('.hover-spotwindow');
    const hoverSpots3 = document.querySelectorAll('.hover-spothuman');
    const hoverSpots4 = document.querySelectorAll('.hover-spotglow1');
    const hoverSpots5 = document.querySelectorAll('.hover-spotglow2');


    hoverSpots.forEach(spot => {
        spot.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = this.getAttribute('data-text');
            this.appendChild(tooltip);
            tooltip.style.display = 'block';
        });

        spot.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
    hoverSpots2.forEach(spot => {
        spot.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = this.getAttribute('data-text');
            this.appendChild(tooltip);
            tooltip.style.display = 'block';
        });

        spot.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
    hoverSpots3.forEach(spot => {
        spot.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = this.getAttribute('data-text');
            this.appendChild(tooltip);
            tooltip.style.display = 'block';
        });

        spot.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
    hoverSpots4.forEach(spot => {
        spot.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = this.getAttribute('data-text');
            this.appendChild(tooltip);
            tooltip.style.display = 'block';
        });

        spot.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
    hoverSpots5.forEach(spot => {
        spot.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = this.getAttribute('data-text');
            this.appendChild(tooltip);
            tooltip.style.display = 'block';
        });

        spot.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#loginForm1').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch('/logingin1', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            document.open();
            document.write(data);
            document.close();
        })
        .catch(error => console.error('Error:', error));
    });
});
