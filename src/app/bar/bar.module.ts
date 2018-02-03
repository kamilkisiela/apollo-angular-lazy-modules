import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

import { SharedModule } from '../shared/shared.module';
import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';

const middlewareLink = new ApolloLink((op, forward) => {
  return forward(op).map(response => {
    console.log('Using Bar');
    return response;
  });
});

@NgModule({
  imports: [
    CommonModule,
    BarRoutingModule,
    SharedModule,
    ApolloModule,
    HttpLinkModule,
  ],
  declarations: [BarComponent],
})
export class BarModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: middlewareLink.concat(
        httpLink.create({
          uri: 'https://1jzxrj179.lp.gql.zone/graphql',
        }),
      ),
      cache: new InMemoryCache(),
    });
  }
}
