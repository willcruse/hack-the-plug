from google.cloud import firestore


def writeToDatabase(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        # flask.Flask.make_response>`.
        `make_response <http://flask.pocoo.org/docs/1.0/api/
    """
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
    print(request_json)
    try:
        if 'email' not in list(request_json.keys()):
            return('no-email', 400, headers)

        collection_path = "applicants"
        ins = {}
        for key in list(request_json.keys()):
            ins[key] = str(request_json.get(key, ""))

        print("Ins: {}".format(ins))
        db = firestore.Client()
        db.collection(collection_path).document(
            request_json.get('email')).set(ins)
    except Exception as e:
        return(str(e), 500, headers)
    return('success', 200, headers)
