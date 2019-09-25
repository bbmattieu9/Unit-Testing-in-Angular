import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;


  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Bala', strength: 8 },
      { id: 2, name: 'Bagalee', strength: 24 },
      { id: 3, name: 'Debbie', strength: 30 },
      { id: 4, name: 'Fisher', strength: 22 }
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHeroes', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
      it('should remove the indicated hero from the heroes list', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[2]);

        expect(component.heroes.length).toBe(3);
      });

      it('should call deleteHero', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[2]);

        expect(mockHeroService.deleteHero).toHaveBeenCalled();
      });
  });
});
