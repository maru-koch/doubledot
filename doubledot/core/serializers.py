from rest_framework.serializers import ModelSerializer
from core.models import Enquiry, Preference

class PreferenceSerializer(ModelSerializer):
    class Meta:
        model = Preference
        fields = "__all__"

class EnquirySerializer(ModelSerializer):

    preferences = PreferenceSerializer(many=True, read_only=False)

    class Meta:
        model = Enquiry
        fields = ('id', 'first_name','last_name','phone_number','email','company','subject', 'message', 'preferences')

    def create(self, validated_data):

        preferences = validated_data.pop('preferences')
        enquiry = Enquiry(**validated_data)
        for preference in preferences:
            _preference = Preference.objects.create(**preference)
            enquiry.preferences = _preference
        enquiry.save()
        
        return enquiry