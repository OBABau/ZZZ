from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HealthCheckView(APIView):
    """Endpoint sencillo para comprobar que la API está viva."""
    permission_classes = []

    def get(self, request):
        return Response({'status': 'ok'}, status=status.HTTP_200_OK)
