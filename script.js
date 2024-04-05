// premiere tache

const iterateWithAsyncAwait = async (values) => {
    for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    };
    iterateWithAsyncAwait(['value1', 'value2', 'value3']);

// seconde tache

const waitCall = async (duration) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { message: 'Données récupérées depuis l\'API' };
            resolve(data);
        }, duration);
    });
}; 
waitCall(2000).then((data) => {
console.log(data);
});

// troisieme tache
const apiCall1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Result from API call 1' });
      }, 1000);
    });
};
  
const apiCall2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Result from API call 2' });
      }, 1500);
    });
};
const concurrentRequests = async () => {
    try {
      const [result1, result2] = await Promise.all([apiCall1(), apiCall2()]);
      console.log(result1.data, result2.data);
    } catch (error) {
      console.error('Error:', error);
    }
};
  
  concurrentRequests();