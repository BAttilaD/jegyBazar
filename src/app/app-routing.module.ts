import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './user/login/login.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { ProfileComponent } from './user/profile/profile.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { BidComponent } from './ticket/bid/bid.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'event',
        component: EventComponent,
        children: [
            { path: 'list', component: EventListComponent },
            { path: 'new', component: EventDetailComponent },
            { path: ':id', component: EventDetailComponent }
        ]
    },

    {
        path: 'ticket',
        component: TicketComponent,
        children: [
            { path: 'list', component: TicketListComponent },
            { path: 'new', component: TicketDetailComponent },
            { path: ':id/bid', component: BidComponent }
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'user',
        children: [
            { path: '', component: ProfileComponent },
            { path: 'edit', component: ProfileEditComponent },
            { path: 'login', component: LoginComponent },
            { path: 'registration', component: RegistrationComponent }
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    static routableComponents = [
        HomeComponent,
        EventComponent,
        EventListComponent,
        EventDetailComponent,
        TicketComponent,
        TicketListComponent,
        TicketDetailComponent,
        BidComponent,
        AboutComponent,
        LoginComponent,
        RegistrationComponent,
        ProfileComponent,
        ProfileEditComponent,
        PageNotFoundComponent
    ];
}
