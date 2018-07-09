import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentComponent } from './components/document/document.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';

const routes: Routes = [
    {   
        path: '',
        component: DocumentsComponent, //add search
        data: { state: 'home'},
    },
    {
        path: 'documents',
        component: DocumentsComponent,
        data: { state: 'documents'},
    },
    {
        path: 'document',
        component: DocumentComponent
        , data: { state: 'document'},
    },
    {
        path: '**',
        component: NotfoundComponent,
        data: { state: 'notfound'},
    }
];
export const AppRoutes = RouterModule.forRoot(routes);  