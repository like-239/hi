import axios from 'axios';

const apiInstance = axios.create({
  baseURL: "http://10.0.2.2:8088/",
  timeout: 30000
});

const API = {
  requestGET_SP: async (urlService) => {
    return await apiInstance
      .get(urlService)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return { data: null };
      });
  },

  requestPOST_SP: async (urlService, data) => {
    return await apiInstance
      .post(urlService, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return { data: null };
      });
  },

  requestPOST_Login: async (urlService, data) => {
    return await apiInstance
      .post(urlService, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'tenant': 'root'
        }
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return { data: null };
      });
  },
  
  requestDELETE: async (urlService) => {
    return await apiInstance
      .delete(urlService)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return { data: null };
      });
  },
  requestGET_USER_DETAILS: async (urlService) => {
    return await apiInstance
    .get(urlService)
    .then(function(response){
      return response.data;
    })
    .catch(function(error){
      console.log(error);
      return {data:null};
    })
  },

requestSignup: async (urlService, signupData) => {
return await apiInstance
.post(urlService,JSON.stringify(signupData),{
  headers:{
    'Content-Type':'application/json'
  }
})
.then(function(response){
return response.signupData;

})
.catch(function(error){
  console.log(error);
  return {data:null};
});
    /*
    try {
      const response = await apiInstance.post(urlService, JSON.stringify(signupData), {
        headers: {
          'Content-Type': 'application/json',
          'tenant': 'root'
        }
      });

      
      return response.data;
    } catch (error) {
      console.log('Error in requestSignup:', error);
      return { data: null };
    }*/
  },
  requestPost_Role: async (urlService, signupData) => {
    return await apiInstance
    .post(urlService,JSON.stringify(signupData),{
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(function(response){
    return response.signupData;
    
    })
    .catch(function(error){
      console.log(error);
      return {data:null};
    });
  },
};

export default API;
