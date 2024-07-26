from django.urls import path
from .views import NoteListCreate, NoteDetail, CategoryListCreate

urlpatterns = [
    path('notes/', NoteListCreate.as_view(), name='note-list-create'),
    path('notes/<int:pk>/', NoteDetail.as_view(), name='note-detail'),
    path('categories/', CategoryListCreate.as_view(), name='category-list-create'),
]
