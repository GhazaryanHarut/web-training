class HTTPTransport {
  request(method, url, options = {}) {
    const { timeout = 5000, data = null, headers = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      let finalUrl = url;
      if (method === 'GET' && data && typeof data === 'object') {
        const queryParams = new URLSearchParams(data).toString();
        finalUrl += '?' + queryParams;
      }

      xhr.open(method, finalUrl);
      xhr.withCredentials = true;

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      let isCompleted = false;
      const timer = setTimeout(() => {
        if (!isCompleted) {
          isCompleted = true;
          xhr.abort();
          reject(new Error('timeout'));
        }
      }, timeout);

      xhr.onload = () => {
        if (isCompleted) return;
        isCompleted = true;
        clearTimeout(timer);

        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr);
        } else {
          reject(new Error(`HTTP error: ${xhr.status}`));
        }
      };

      xhr.onerror = () => {
        if (isCompleted) return;
        isCompleted = true;
        clearTimeout(timer);
        reject(new Error('Network error'));
      };

      if (method === 'GET' || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  }

  get(url, options) {
    return this.request('GET', url, options);
  }

  post(url, options) {
    return this.request('POST', url, options);
  }

  put(url, options) {
    return this.request('PUT', url, options);
  }

  delete(url, options) {
    return this.request('DELETE', url, options);
  }
}

const transport = new HTTPTransport();
const iddata = document.getElementById('data')
transport.get('https://jsonplaceholder.typicode.com/todos/1').then((data) => { iddata.innerHTML = data.response }) // Response
