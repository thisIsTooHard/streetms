/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
	Author: Biscuit
*/
var status = -1;

function start() {
	cm.sendNext("Aren't you the one that used to be in Ellinia? So I finally found you! Do you know how long it took for me to finally find you?", 9);
}

function action(mode, type, selection) {
    if(mode != 1) {
        cm.dispose();
    } else {
        status++;
		if (status == 0) {
			cm.sendNextPrev("Who are you?", 3);
		} else if (status == 1) {
			cm.sendAcceptDecline("Me? If you want to know, then you should stop by my cave. I'm even sending you a formal invitation. The moment you accept It, you'll be sent directly to my cave. I'll be waiting for you.");
		} else if (status == 2) {
			cm.warp(910510200);
			cm.forceStartQuest(21719, 1204000);
			cm.forceCompleteQuest(21719, 1204000);
			cm.dispose();
		}
    }
}