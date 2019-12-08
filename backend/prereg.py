from google.cloud import firestore


def writeToDatabase(request):
    # Set CORS headers for the preflight request
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    request_json = request.get_json()
    headers = {
        'Access-Control-Allow-Origin': '*',
    }
    try:
        if 'email' not in list(request_json.keys()):
            return('no-email', 400, headers)
        collection_path = "preregister"
        ins = {}
        for key in list(request_json.keys()):
            ins[key] = str(request_json.get(key, ""))

        db = firestore.Client()
        doc = db.collection(collection_path).document(
            request_json.get("email")).get()
        if doc.exists:
            return('exists', 400, headers)
        else:
            db.collection(collection_path).document(
                request_json.get('email')).set(ins)
    except Exception as e:
        return(str(e), 500, headers)
    return('success', 200, headers)
