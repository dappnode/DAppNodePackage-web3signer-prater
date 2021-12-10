import { Component, Input, OnInit } from '@angular/core';
import { BeaconchaRequestsService } from 'src/app/common/services/beaconcha-requests.service';

@Component({
  selector: 'app-get-beaconcha-validator',
  templateUrl: './get-beaconcha-validator.component.html',
  styleUrls: ['./get-beaconcha-validator.component.scss'],
})
export class GetBeaconchaValidatorComponent implements OnInit {
  @Input() publicKeys: string[] = [];

  constructor(beaconchaValidatorService: BeaconchaRequestsService) {}

  ngOnInit(): void {}
}
