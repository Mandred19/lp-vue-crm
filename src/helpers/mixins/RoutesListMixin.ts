import { Component, Vue } from 'vue-property-decorator';
import InterfaceRoute from '@/interfaces/InterfaceRoute';

@Component({})
export default class RoutesListMixin extends Vue {
  protected readonly routesList: InterfaceRoute[] = [
    { title: 'Home', name: 'Home', to: '/' },
    { title: 'Create record', name: 'Record', to: '/create-record' },
    { title: 'Categories', name: 'Categories', to: '/categories' },
    { title: 'Planing', name: 'Planing', to: '/planing' },
    { title: 'History', name: 'History', to: '/history' },
    { title: 'User profile', name: 'Profile', to: '/profile' },
  ];
}
