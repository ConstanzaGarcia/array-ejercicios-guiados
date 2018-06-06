const tasks = [
    {
      name: 'Pasear al perro',
      duration: 40
    },
    {
      name: 'Estudiar JS',
      duration: 120
    },
    {
      name: 'Ver un capítulo de Aggretsuko',
      duration: 15
    },
    {
      name: 'Ir a clases',
      duration: 300
    },
    {
      name: 'Cepillar al gato',
      duration: 40
    },
    {
      name: 'Ver fail compilation en Youtube',
      duration: 120
    }
  ];

  //Sacar el valor de las tareas y guardarlo en un arreglo. Será arreglo de tareas. 

  let taskNames = [];

  for (let i=0; i < tasks.length;i++ ) {
      taskNames.push(tasks[i].name); //va a ir pasando por cada uno de los elementos de taks
  }

  //forEach
  let taskNames = [];
  tasks.forEach((tasks)=> { 
      taskNames.push (tasks.name);
  })

  //refacttorización de for Each
  let taskNames = [];
  taskNames.forEach(tasks=>taskNames.push (tasks.name));

  //map sabe que si o si debe pasar por todos los elementos 
  const taskNames = tasks.map(()=> {
      return tasks.name;
  })

  //refactorizar map, su objetivo es hacer el código mas pequeño. El nombre del parametro se debe llamar tu elemennto. 

  const taskNames = tasks.map(tasks=> tasks.name);

  //Filter
  //Calcular las duraciones mayor o igual a 120 mintuos

  //forEach
  let difficultTask = [];

  tasks.forEach((element) => {
      if (element.duration >=120){   /*parametro.propiedad que necesito del objeto*/
        difficultTask.push(element);
      }

  });

  //Filter , no usa los dos parametros 

  const difficultTask = tasks.filter ((index)=> { /*las tareas por la que va a iterar es el parametro*/
    return index.duration>=120;
  })

  //Filter refacturación

  const difficultTask = tasks.filter (index => index.duration>=120);

  //reduce, devuelve un elemento string o number
 // primero hacemos el map para sacar la duración de las tareas
 // [40, 120, 15, 300, 40,120]

  const taskDuration = task.map ((element)=> {
    return element.duration; 

  } ).reduce((previousValue, currentValue)=> {
    return previous + curenntVakue;

  })

  //Spread operator

  const arr= [1,2,3]
  const addition = (num1, num2, num3) => {
      console.log (num1+ num2+nume3)
  }

  addiion 