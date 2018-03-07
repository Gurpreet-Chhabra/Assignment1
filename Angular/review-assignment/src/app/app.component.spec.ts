import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LightswitchCompComponent } from './lightswitch-comp/lightswitch-comp.component';
import { HomeService} from './home/home.service';


let homeStub: Partial<HomeService>;

homeStub = {
  loginData: {"age_range":{"min":21},"first_name":"Gurpreet","picture":{"data":{"height":50,"is_silhouette":false,"url":"https://scontent.xx.fbcdn.net/v/t1.0-1/c0.13.50.50/p50x50/12932591_1703322929892631_7535520873215882424_n.jpg?oh=17141ac0ed6fee9e4c326dcc4d8f5055&oe=5B15074B","width":50}},"last_name":"Chhabra","gender":"female","id":"2019639844927603"}
};

describe('LightswitchCompComponent',()=> {
    let comp;
    let element , fixture;
    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightswitchCompComponent ],
      providers:    [ {provide: HomeService, useValue: homeStub } ]
        });

  beforeEach(() => {
     fixture = TestBed.createComponent(LightswitchCompComponent);
     comp = fixture.componentInstance;
     console.log(comp);
    fixture.detectChanges();
    element = fixture.nativeElement;
    console.log(element.textContent);
  });

  it('should check elements text', () => {
      console.log(fixture.componentInstance);
    expect(comp).toBeDefined();
    const span = element.queryAll('span');
    console.log(span);
    expect(element.textContent).toContain('The light is Off');
     expect(span.textContent).toEqual('The light is Off');
  });


});
