function app() {
    const containerArea = document.getElementById('container');
    const formElement = document.getElementById('formElement');
    const homeworkList = document.getElementById('homeworkList');
    const alertMess = document.getElementById('messageAlert');
    let homeworks = [];
  
    function loadListeners() {
      formElement.addEventListener('submit', createHomework);
      containerArea.addEventListener('click', handleListClick);
    }
  
    loadListeners();
  
    function clearAlertMessage() {
      alertMess.textContent = '';
    }
  
    function createHomework(e) {
      e.preventDefault();
      const homeworkInput = document.getElementById('homework').value.trim();
  
      if (homeworkInput !== '') {
        const homeworkObject = {
          id: Date.now(),
          homework: homeworkInput,
        };
  
        homeworks.push(homeworkObject);
        renderHomeworks();
        formElement.reset();
        alertMess.textContent = '';
      } else {
        alertMess.textContent = "Por favor, ingresa texto en el campo";
      }
    }
  
    function renderHomeworks() {
      homeworkList.innerHTML = '';
  
      homeworks.forEach(homework => {
        const labelItem = document.createElement('label');
        const checkItem = document.createElement('input');
        const deleteLink = document.createElement('a'); // Agregar enlace
  
        checkItem.setAttribute('type', 'checkbox');
        checkItem.setAttribute('value', homework.id);
  
        deleteLink.textContent = `   x`; // Texto del enlace
        deleteLink.setAttribute('href', '#'); // Hacer el enlace clickeable
        deleteLink.setAttribute('data-id', homework.id); // Identificador único para la tarea
        deleteLink.classList.add('delete-link'); // Clase para estilizar opcionalmente
        deleteLink.style.display = 'none'; // Ocultar el enlace inicialmente
  
        labelItem.appendChild(checkItem);
        labelItem.appendChild(document.createTextNode(homework.homework));
        labelItem.appendChild(deleteLink);
  
        homeworkList.appendChild(labelItem);
      });
    }
  
    function handleListClick(event) {
      const target = event.target;
  
      if (target.classList.contains('delete-link')) { // Si se hizo clic en un enlace de eliminar
        const taskId = target.getAttribute('data-id'); // Obtener el ID de la tarea a eliminar
        deleteHomework(taskId); // Llamar a la función para eliminar la tarea
      }
  
      if (target.type === 'checkbox') { // Si se hizo clic en un checkbox
        const deleteLink = target.parentElement.querySelector('.delete-link'); // Obtener el enlace de eliminar correspondiente al checkbox
        if (deleteLink) {
          if (target.checked) {
            deleteLink.style.display = 'inline'; // Mostrar el enlace si el checkbox está marcado
          } else {
            deleteLink.style.display = 'none'; // Ocultar el enlace si el checkbox no está marcado
          }
        }
      }
    }
  
    function deleteHomework(taskId) {
      homeworks = homeworks.filter(homework => homework.id !== parseInt(taskId)); // Filtrar las tareas excluyendo la que tiene el ID seleccionado
      renderHomeworks(); // Renderizar nuevamente la lista de tareas
    }
  }
  
  app(); // Llamada a la función para iniciar la aplicación
  