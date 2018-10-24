import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCalcComponent } from './my-calc.component';


describe('MyCalcComponent tests', () => {
  let component: MyCalcComponent;
  let fixture: ComponentFixture<MyCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add two numbers',()=>{
    it('should add 2 + 5 to be equal 7', ()=>{
      expect(component.add(2,5)).toBe(7)
      expect(component.add(2,5)).toEqual(7)
    })
  })

  describe('Subtract two numbers',()=>{
    it('should add 7 - 2 to be equal 5', ()=>{
      expect(component.subtract(7,2)).toBe(5)
    })
  })

  describe('Multiply two numbers',()=>{
    it('should add 2 * 5 to be equal 10', ()=>{
      expect(component.multiply(2,5)).toBe(10)
    })
  })

  describe('Divide two numbers',()=>{
    it('should add 10 / 2 to be equal 5', ()=>{
      expect(component.divide(10,2)).toEqual(5) 
    })
  })
});
