import json
import boto3

def lambda_handler(event, context):
    dynamo = boto3.client('dynamodb')
    print(type(event))

    # dynamo.put_item(TableName="applicants", Item=event)
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
